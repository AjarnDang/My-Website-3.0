"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback, memo } from "react";
import { Sun, MoonStar } from "lucide-react";

// ใช้ memo เพื่อลดการ re-render ที่ไม่จำเป็น
const SwitchTheme = memo(() => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isChanging, setIsChanging] = useState(false);

  // ตั้งค่าเริ่มต้นเมื่อคอมโพเนนต์โหลด
  useEffect(() => {
    setMounted(true);
  }, []);

  // ใช้ useCallback เพื่อหลีกเลี่ยงการสร้างฟังก์ชันใหม่ทุกครั้งที่ re-render
  const handleSwitchTheme = useCallback(() => {
    if (isChanging) return;
    
    setIsChanging(true);
    
    // ใช้ requestAnimationFrame เพื่อให้สอดคล้องกับกระบวนการ paint ของเบราว์เซอร์
    requestAnimationFrame(() => {
      if (resolvedTheme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
      
      // ลดเวลาการรอลงเหลือ 300ms เพื่อความเร็วที่เพิ่มขึ้น
      setTimeout(() => setIsChanging(false), 300);
    });
  }, [isChanging, resolvedTheme, setTheme]);

  // รอจนกระทั่งคอมโพเนนต์ mount ก่อนการแสดงผล
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      {isChanging && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300" />
      )}
      
      <button
        className="p-1 hover:opacity-70 relative z-10"
        onClick={handleSwitchTheme}
        aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="relative h-6 w-6 flex items-center justify-center">
          <Sun 
            className={`absolute theme-icon ${
              resolvedTheme === "dark" 
                ? "opacity-100 scale-100 rotate-0" 
                : "opacity-0 scale-50 rotate-90"
            }`} 
            color="#ffffff" 
          />
          <MoonStar 
            className={`absolute theme-icon ${
              resolvedTheme === "dark" 
                ? "opacity-0 scale-50 rotate-90" 
                : "opacity-100 scale-100 rotate-0"
            }`} 
            color="#222222" 
          />
        </div>
      </button>
    </div>
  );
});

// เพิ่ม displayName เพื่อการ debug ที่ดีขึ้น
SwitchTheme.displayName = "SwitchTheme";

export default SwitchTheme;
