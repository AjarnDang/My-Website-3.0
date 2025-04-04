/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // ใช้ทั้ง pathname และ searchParams เพื่อตรวจจับการเปลี่ยนแปลงของ URL
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };
    
    // ตรวจจับการเปลี่ยนเส้นทางและเริ่มโหลดทันที
    handleRouteChange();
    
    // กำหนดเวลาในการแสดงหน้าโหลด
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]); // เริ่มโหลดใหม่เมื่อ URL เปลี่ยน

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#f5f5f5] dark:bg-[#0d1117] opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Shining Loading Text */}
          <div className="relative font-bold leading-none rounded-full uppercase px-4 py-3 overflow-hidden">
            <small className="relative z-10">
              // Loading Content
            </small>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent dark:via-slate-700/70 via-slate-300/70 to-transparent w-full h-full animate-shine"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
