/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname(); // Detect page changes

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1500); // Adjust time
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs on every route change

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 dark:text-white opacity-70 text-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Shining Loading Text */}
          <div className="relative text-2xl font-bold leading-none uppercase overflow-hidden">
            <span className="relative z-10">
              // <br/>
              Loading <br/>
              Content
              </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full animate-shine"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
