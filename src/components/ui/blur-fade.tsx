"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type BlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: string;
  className?: string;
};

export default function BlurFade({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  blur = "10px",
  className,
}: BlurFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const offset = 24;
  const directionMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: `blur(${blur})`,
        ...directionMap[direction],
      }}
      animate={
        inView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : undefined
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
