"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { motion } from "framer-motion";
import AnimatedBackground from "./layout/AnimatedBackground";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <motion.div
        className="fixed inset-0 -z-10 top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <AnimatedBackground />
      </motion.div>
      {children}
    </NextThemesProvider>
  );
}
