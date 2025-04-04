"use client";

import { useEffect, useState, memo } from "react";
import { Minus } from "lucide-react";

const sections = [
  { id: "uxui-works", label: "UX / UI" },
  { id: "dev-works", label: "CODING" },
];

// ใช้ memo เพื่อลดการ re-render ที่ไม่จำเป็น
const WorkNav = memo(function WorkNav() {
  const [activeSection, setActiveSection] = useState("uxui-works");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adjust offset for better detection

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop (md and up) - Right Center */}
      <div className="hidden lg:hidden xl:block fixed transform top-1/2 right-6 -translate-y-1/2 space-y-4 z-10">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`
          ${
            activeSection === id
              ? "dark:bg-green-700 bg-green-500 dark:shadow-slate-700 shadow-slate-400/50 shadow-lg"
              : "text-gray-300"
          }
          btn w-full items-center gap-2 text-right px-3 py-2 rounded-full transition-all duration-300 flex justify-end
        `}
          >
            {activeSection === id && <Minus color="#d1d5db" />}
            <span
              className={`${
                activeSection === id
                  ? "text-green-100"
                  : "dark:text-gray-300 text-gray-600"
              } font-bold text-lg`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile (sm and below) - Bottom Center */}
      <div className="xl:hidden lg:flex flex fixed bottom-12 rounded-full dark:bg-neutral-800 bg-neutral-200 left-1/2 -translate-x-1/2 dark:shadow-slate-600/70 shadow-slate-400 shadow-xl z-50">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`
          ${
            activeSection === id
              ? "dark:bg-green-800 bg-green-600"
              : "text-gray-500"
          }
          btn items-center gap-0 text-center px-6 py-4 rounded-full transition-all duration-300 flex justify-center w-36
        `}
          >
            <span
              className={`${
                activeSection === id
                  ? "dark:text-green-300 text-green-200"
                  : "dark:text-gray-300 text-neutral-800"
              }
              text-lg font-bold`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
});

// เพิ่ม displayName เพื่อให้ React DevTools แสดงชื่อที่ถูกต้อง
WorkNav.displayName = "WorkNav";

export default WorkNav;
