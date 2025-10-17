// useStompClient.ts
import { Client, IMessage, StompSubscription } from "@stomp/stompjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { getAccessToken } from "@/utils";

type SubscribeHandler<T = any> = (msg: T, raw: IMessage) => void;

interface UseStompClientOptions {
  url?: string;
  autoConnect?: boolean;
  debug?: boolean;
}

export function useStompClient(opts: UseStompClientOptions = {}) {
  const {
    url = process.env.NEXT_PUBLIC_CHAT_URL,
    autoConnect = true,
    debug = false,
  } = opts;


  const clientRef = useRef<Client | null>(null);
  const [client, setClient] = useState<Client | null>(null); // <-- reactive
  const [isConnected, setIsConnected] = useState(false);

  const subsRef = useRef<Map<string, StompSubscription[]>>(new Map());

  const connect = useCallback(() => {
    if (clientRef.current?.connected) return;

    const c = new Client({
      brokerURL: url,
      reconnectDelay: 3000,
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      connectHeaders: { Authorization: `Bearer ${getAccessToken()}` },
      debug: debug ? (msg) => console.log("[STOMP]", msg) : () => {},
      onConnect: () => {
        setIsConnected(true);
        setClient(c); // <-- make reactive after connect
        toast.success("Connected to chat");
      },
      onDisconnect: () => {
        setIsConnected(false);
        setClient(null); // <-- clear on disconnect
      },
      onStompError: (frame) => {
        console.error("Broker error:", frame.headers["message"], frame.body);
      },
      onWebSocketError: (evt) => {
        console.error("WebSocket error", evt);
      },
    });

    c.activate();
    clientRef.current = c;
  }, [url, debug]);

  const disconnect = useCallback(async () => {
    subsRef.current.forEach((arr) => arr.forEach((s) => s.unsubscribe()));
    subsRef.current.clear();

    setIsConnected(false);
    setClient(null);
    await clientRef.current?.deactivate?.();
    clientRef.current = null;
  }, []);

  useEffect(() => {
    if (!autoConnect) return;
    connect();
    return () => void disconnect();
  }, [autoConnect, connect, disconnect]);

  const subscribe = useCallback(
    (destination: string, handler: SubscribeHandler) => {
      const c = client; // <-- use stateful client, not clientRef.current
      if (!c || !c.connected) {
        console.warn(`Tried to subscribe to "${destination}" before ready.`);
        return () => {};
      }

      const sub = c.subscribe(destination, (message: IMessage) => {
        let payload: any = message.body;
        try {
          payload = JSON.parse(message.body);
        } catch {}
        handler(payload, message);
      });

      if (sub) {
        const list = subsRef.current.get(destination) ?? [];
        list.push(sub);
        subsRef.current.set(destination, list);
      }

      return () => {
        if (!sub) return;
        try {
          sub.unsubscribe();
        } finally {
          const list = subsRef.current.get(destination);
          if (list) {
            subsRef.current.set(
              destination,
              list.filter((s) => s.id !== sub.id)
            );
            if ((subsRef.current.get(destination)?.length ?? 0) === 0) {
              subsRef.current.delete(destination);
            }
          }
        }
      };
    },
    [client] // <-- depend on reactive client
  );

  const unsubscribeAll = useCallback((destination: string) => {
    const list = subsRef.current.get(destination);
    if (!list) return;
    list.forEach((s) => s.unsubscribe());
    subsRef.current.delete(destination);
  }, []);

  return {
    // reactive state
    isConnected,
    client, // <-- now reactive
    // controls
    connect,
    disconnect,
    // subs
    subscribe,
    unsubscribeAll,
  };
}
