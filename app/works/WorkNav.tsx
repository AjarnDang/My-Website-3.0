"use client";

import { memo, useEffect, useState } from "react";

const sections = [
  { id: "uxui-works", label: "UX / UI" },
  { id: "dev-works", label: "CODING" },
];

interface WorkNavProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

// ใช้ memo เพื่อลดการ re-render ที่ไม่จำเป็น
const WorkNav = memo(function WorkNav({ activeTab, onTabChange }: WorkNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scroller = document.getElementById("app-scroll");
    if (!scroller) return;

    const handleScroll = () => {
      setIsScrolled(scroller.scrollTop > 0);
    };

    handleScroll();
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky md:top-0 top-5 z-30 bg-[var(--bg-color)] border-theme py-5 px-4 transition-shadow md:border-t-0 border-t md:pb-5 pb-2 w-full ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="flex flex-wrap text-sm font-medium text-center" role="tablist">
        {sections.map(({ id, label }, index) => {
          const isActive = activeTab === id;
          return (
            <div key={id} className={index < sections.length - 1 ? "me-2" : ""}>
              <button
                onClick={() => onTabChange(id)}
                role="tab"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...(isActive ? { "aria-selected": "true" } : { "aria-selected": "false" })}
                aria-controls={`${id}-panel`}
                id={`${id}-tab`}
                className={`inline-block px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white bg-green-600 dark:bg-green-700 active"
                    : "hover:text-[var(--text-color)] hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// เพิ่ม displayName เพื่อให้ React DevTools แสดงชื่อที่ถูกต้อง
WorkNav.displayName = "WorkNav";

export default WorkNav;
