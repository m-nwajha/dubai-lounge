"use client";

import React from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  amount?: number;
  duration?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = "up",
  delay = 0,
  amount = 0.2,
  duration = 0.8,
  className,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
