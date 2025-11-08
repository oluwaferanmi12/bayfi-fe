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
      
    </div>
  );
};
