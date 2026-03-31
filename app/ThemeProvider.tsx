"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const FloatingDots = dynamic(() => import("./layout/AnimatedBackground"), { ssr: false });

type ThemeName = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: "class" | string;
  defaultTheme?: ThemeName;
  enableSystem?: boolean;
  storageKey?: string;
}

interface ThemeContextType {
  theme: ThemeName;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme: ThemeName, attribute: string) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const resolved = theme === "system" ? getSystemTheme() : theme;

  if (attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
  } else {
    root.setAttribute(attribute, resolved);
  }

  root.style.colorScheme = resolved;
};

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme-preference",
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<ThemeName>(defaultTheme);

  React.useEffect(() => {
    let initialTheme: ThemeName = defaultTheme;

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "light" || saved === "dark" || saved === "system") {
        initialTheme = saved;
      }
    } catch {
      // ignore cross-domain localStorage errors
    }

    if (!enableSystem && initialTheme === "system") {
      initialTheme = "light";
    }

    setTheme(initialTheme);
    setMounted(true);
  }, [defaultTheme, enableSystem, storageKey]);

  const resolvedTheme = React.useMemo<"light" | "dark">(() => {
    if (theme === "system") {
      return getSystemTheme();
    }
    return theme === "dark" ? "dark" : "light";
  }, [theme]);

  React.useEffect(() => {
    if (!mounted) return;

    const themeToApply = theme === "system" && enableSystem ? getSystemTheme() : theme;
    applyTheme(themeToApply, attribute);

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // ignore
    }
  }, [theme, mounted, attribute, enableSystem, storageKey]);

  React.useEffect(() => {
    if (!enableSystem || typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(event.matches ? "dark" : "light", attribute);
      }
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme, enableSystem, attribute]);

  const contextValue = React.useMemo<ThemeContextType>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          className="fixed inset-0 -z-10 top-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <FloatingDots key={index} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
      {children}
    </ThemeContext.Provider>
  );
}
