"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const particles = new Array(20).fill(0);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 dark:bg-slate-100 bg-slate-400 rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          animate={{ 
            y: ["0vh", "100vh"],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
