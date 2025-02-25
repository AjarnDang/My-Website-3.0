"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingDots({ index }: { index: number }) {
  const [position, setPosition] = useState<{ top: string; left: string } | null>(null);

  useEffect(() => {
    setPosition({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    });
  }, []);

  if (!position) return null; // Avoid mismatches by not rendering on the first SSR pass

  return (
    <motion.div
      key={index}
      className="absolute w-1 h-1 dark:bg-slate-200 bg-slate-400 rounded-full"
      style={position}
      animate={{ y: ["0vh", "100vh"], opacity: [1, 0] }}
      transition={{
        duration: Math.random() * 5 + 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
