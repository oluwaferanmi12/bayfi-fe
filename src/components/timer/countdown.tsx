import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { useQueryClient } from "@tanstack/react-query";

export const CountDown = ({ duration }: { duration: string }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const queryClient = useQueryClient();
  //   queryClient.invalidateQueries({queryKey:})

  useEffect(() => {
    if (!duration) return;

    // Convert to UTC timestamp
    const targetTime = moment.utc(duration).valueOf();

    const update = () => {
      const now = moment.utc().valueOf();
      const diff = targetTime - now;
      setTimeLeft(diff > 0 ? diff : 0);
    };

    update(); // initial call
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      queryClient.invalidateQueries({ queryKey: ["one-chat-detail"] });
    }
  }, [timeLeft]);

  // Convert ms → minutes and seconds
  const totalSeconds = Math.floor(timeLeft / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return <span>{formatted}</span>;
};
