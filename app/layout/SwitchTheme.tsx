"use client";
import { useTheme } from "../ThemeProvider";
import { useEffect, useState, useCallback, memo } from "react";
import { Sun, MoonStar } from "lucide-react";

// ใช้ memo เพื่อลดการ re-render ที่ไม่จำเป็น
const SwitchTheme = memo(() => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // ตั้งค่าเริ่มต้นเมื่อคอมโพเนนต์โหลด
  useEffect(() => {
    setMounted(true);
  }, []);

  // ใช้ useCallback เพื่อหลีกเลี่ยงการสร้างฟังก์ชันใหม่ทุกครั้งที่ re-render
  const handleSwitchTheme = useCallback(() => {
    document.documentElement.classList.add("theme-transitioning");
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 450);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  // รอจนกระทั่งคอมโพเนนต์ mount ก่อนการแสดงผล
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <button
        className="p-1 relative z-10 transition-opacity duration-300 hover:opacity-80 active:opacity-90"
        onClick={handleSwitchTheme}
        aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="relative h-6 w-6 flex items-center justify-center">
          <Sun 
            className={`absolute theme-icon ${
              resolvedTheme === "dark" 
                ? "opacity-100 scale-100 rotate-0" 
                : "opacity-0 scale-50 rotate-90"
            } text-white`} 
          />
          <MoonStar 
            className={`absolute theme-icon ${
              resolvedTheme === "dark" 
                ? "opacity-0 scale-50 rotate-90" 
                : "opacity-100 scale-100 rotate-0"
            } text-[var(--text-color)]`} 
          />
        </div>
      </button>
    </div>
  );
});

// เพิ่ม displayName เพื่อการ debug ที่ดีขึ้น
SwitchTheme.displayName = "SwitchTheme";

export default SwitchTheme;
