import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import floatMessageIcon from "@/assets/svg/floatint-message-icon.svg";

export const FloatingDraggable = () => {
  const boundsRef = useRef<HTMLDivElement | null>(null);

  return (
    // Full-viewport bounds. We allow pointer events on the child only.
    <div
      ref={boundsRef}
      className="fixed inset-0 z-50 pointer-events-none border border-[red]"
      aria-hidden
    >
      <motion.div
        className="absolute right-6 bottom-6 pointer-events-auto"
        drag
        dragConstraints={boundsRef} // <-- keeps it inside the viewport
        dragElastic={0} // <-- snappy; optional
        dragMomentum={false} // <-- no fling; optional
      >
        <div className="bg-bayfi-green-500 p-3 rounded-full shadow">
          <Image src={floatMessageIcon} alt="Chat" />
        </div>
      </motion.div>
    </div>
  );
};
