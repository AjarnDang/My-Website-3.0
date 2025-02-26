"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const FloatingDots = dynamic(() => import("./layout/AnimatedBackground"), { ssr: false });

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme } = useTheme(); // Detect theme changes
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // Avoid hydration mismatch

  return (
    <NextThemesProvider {...props}>
      <AnimatePresence mode="wait">
        <motion.div
          key={theme} // Trigger animation when theme changes
          className="fixed inset-0 -z-10 top-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }} // Smooth fade out on theme change
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <FloatingDots key={index} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
      {children}
    </NextThemesProvider>
  );
}
