import React from "react";
import { motion } from "framer-motion";

export const HoverBorderGradient = ({
  children,
  containerClassName = "",
  className = "",
  as: Tag = "div",
  duration = 1,
  clockwise = true,
  ...props
}) => {
  return (
    <Tag
      className={`relative flex shrink-0 p-[1px] overflow-hidden ${containerClassName}`}
      style={{
        background: "transparent"
      }}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: clockwise ? 360 : -360 }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #98d8c8, transparent)`
        }}
      />
      <div
        className={`relative bg-inherit z-10 flex items-center justify-center w-full h-full text-sm antialiased ${className}`}
      >
        {children}
      </div>
    </Tag>
  );
};
