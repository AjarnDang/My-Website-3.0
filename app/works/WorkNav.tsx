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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)"); // Tailwind 'lg'
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      role="tablist"
      className={
        isDesktop
          ? "fixed top-1/2 right-6 -translate-y-1/2 z-50 space-y-4"
          : "fixed bottom-16 left-1/2 -translate-x-1/2 z-50 flex rounded-full dark:bg-neutral-800 bg-neutral-200 dark:shadow-slate-600/70 shadow-slate-400 shadow-xl overflow-hidden"
      }
    >
      {sections.map(({ id, label }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            role="tab"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(isActive ? { "aria-selected": "true" } : { "aria-selected": "false" })}
            aria-controls={`${id}-panel`}
            id={`${id}-tab`}
            className={
              isDesktop
                ? `w-full items-center gap-2 text-right px-3 py-2 rounded-full transition-all duration-300 flex justify-end border border-theme ${
                    isActive
                      ? "dark:bg-green-700 bg-green-500 dark:shadow-slate-700 shadow-slate-400/50 shadow-lg text-white"
                      : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`
                : `items-center text-center px-6 py-4 rounded-full transition-all duration-300 flex justify-center w-36 ${
                    isActive ? "dark:bg-green-800 bg-green-600 text-white" : "text-gray-500"
                  }`
            }
          >
            <span className={isDesktop ? "font-bold text-lg" : "text-lg font-bold"}>{label}</span>
          </button>
        );
      })}
    </div>
  );
});

// เพิ่ม displayName เพื่อให้ React DevTools แสดงชื่อที่ถูกต้อง
WorkNav.displayName = "WorkNav";

export default WorkNav;
  