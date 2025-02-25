"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { motion } from "framer-motion";

const FloatingDots = dynamic(() => import("./layout/AnimatedBackground"), { ssr: false });

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <motion.div
        className="fixed inset-0 -z-10 top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <FloatingDots key={index} index={index} />
        ))}

      </motion.div>
      {children}
    </NextThemesProvider>
  );
}
