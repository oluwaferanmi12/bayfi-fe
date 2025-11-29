"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  direction?: Direction;
  distance?: number;
  withOpacity?: boolean;
  className?: string;
};

const ScrollReveal = ({
  children,
  duration = 0.6,
  delay = 0,
  direction = "up",
  distance = 40,
  withOpacity = true,
  className,
}: ScrollRevealProps) => {
  // Decide the starting offset based on direction
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance }; // start lower, move up
      case "down":
        return { x: 0, y: -distance }; // start higher, move down
      case "left":
        return { x: distance, y: 0 }; // start right, move left
      case "right":
        return { x: -distance, y: 0 }; // start left, move right
      case "none":
      default:
        return { x: 0, y: 0 }; // no directional movement
    }
  };

  const offset = getOffset();

  const hiddenState = {
    opacity: withOpacity ? 0 : 1,
    x: offset.x,
    y: offset.y,
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      className={className}
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{
        once: false, // so it can animate again when it comes back into view
        amount: 0.3, // 30% of component must be visible to trigger
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
