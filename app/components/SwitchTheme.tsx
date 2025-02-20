"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true));

  if (!mounted) {
    return null;
  }

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="p-1 hover:opacity-70"
      onClick={handleSwitchTheme}
    >
      {theme === "dark" ? (
        <Sun className="scale-0 dark:scale-100 " />
      ) : (
        <MoonStar className="scale-100 dark:scale-0" />
      )}
    </button>
  );
};

export default SwitchTheme;
