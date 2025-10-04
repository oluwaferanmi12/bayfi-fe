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

type SubEntry = {
  destination: string;
  handler: SubscribeHandler;
  sub?: StompSubscription | null;
};

export function useStompClient(opts: UseStompClientOptions = {}) {
  const {
    url = process.env.NEXT_PUBLIC_CHAT_URL!,
    autoConnect = true,
    debug = false,
  } = opts;

  const clientRef = useRef<Client | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Keep the desired subscriptions while the page is mounted
  const subsRef = useRef<SubEntry[]>([]);

  const resubscribeAll = useCallback((c: Client) => {
    subsRef.current.forEach((entry, idx) => {
      entry.sub?.unsubscribe();
      const sub = c.subscribe(entry.destination, (message: IMessage) => {
        let payload: any = message.body;
        try { payload = JSON.parse(message.body); } catch {}
        entry.handler(payload, message);
      });
      subsRef.current[idx] = { ...entry, sub };
    });
  }, []);

  const connect = useCallback(() => {
    // if we already have an active+connected client, do nothing
    if (clientRef.current?.active && clientRef.current?.connected) return;

    // If there's a zombie client (active but stuck), reset it
    if (clientRef.current?.active && !clientRef.current?.connected) {
      try { clientRef.current?.deactivate(); } catch {}
      clientRef.current = null;
    }

    const c = new Client({
      brokerURL: url,
      reconnectDelay: 3000,
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      // ensure fresh token before every attempt (initial + retries)
      beforeConnect: async () => {
        c.connectHeaders = { Authorization: `Bearer ${getAccessToken()}` };
        if (debug) console.log("[STOMP] beforeConnect (headers refreshed)");
      },
      debug: debug ? (msg) => console.log("[STOMP]", msg) : () => {},
      onConnect: () => {
        setIsConnected(true);
        setClient(c);
        resubscribeAll(c);
        toast.dismiss("stomp-retry");
        toast.success("Connected to chat");
      },
      onDisconnect: () => {
        setIsConnected(false);
        setClient(null);
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
  }, [url, debug, resubscribeAll]);

  const disconnect = useCallback(async () => {
    // Clean up subs and client on unmount/navigation
    subsRef.current.forEach((e) => e.sub?.unsubscribe());
    subsRef.current = [];
    setIsConnected(false);
    setClient(null);
    await clientRef.current?.deactivate?.();
    clientRef.current = null;
  }, []);

  // Auto connect while this page is mounted; disconnect on unmount
  useEffect(() => {
    if (!autoConnect) return;
    connect();
    return () => { void disconnect(); };
  }, [autoConnect, connect, disconnect]);

  // When user returns (focus/visible/online), ensure we’re connected.
  // This handles background-tab throttling and sleep/wake cases.
  useEffect(() => {
    const ensure = () => {
      const c = clientRef.current;
      if (!c?.connected) connect();
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") ensure();
    };
    window.addEventListener("focus", ensure);
    window.addEventListener("online", ensure);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("focus", ensure);
      window.removeEventListener("online", ensure);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [connect]);

  const subscribe = useCallback(
    (destination: string, handler: SubscribeHandler) => {
      const entry: SubEntry = { destination, handler, sub: null };
      const c = clientRef.current;

      if (c && c.connected) {
        const sub = c.subscribe(destination, (message: IMessage) => {
          let payload: any = message.body;
          try { payload = JSON.parse(message.body); } catch {}
          handler(payload, message);
        });
        entry.sub = sub ?? null;
      }

      subsRef.current.push(entry);

      // Return unsubscribe for this single subscription
      return () => {
        entry.sub?.unsubscribe();
        subsRef.current = subsRef.current.filter((e) => e !== entry);
      };
    },
    []
  );

  const unsubscribeAll = useCallback((destination: string) => {
    subsRef.current
      .filter((e) => e.destination === destination)
      .forEach((e) => e.sub?.unsubscribe());
    subsRef.current = subsRef.current.filter((e) => e.destination !== destination);
  }, []);

  return {
    isConnected,
    client,
    connect,
    disconnect,
    subscribe,
    unsubscribeAll,
  };
}
