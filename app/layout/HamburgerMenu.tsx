"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import NavMenu from "../utils/navMenu";
import Link from "next/link";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 🍔 Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 flex items-center justify-center w-10 h-10"
      >
        <Menu size={24} />
      </button>

      {/* 🔹 Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 dark:bg-gray-900/80 bg-white/80 z-40 transition-all"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 h-full w-full dark:bg-slate-900 bg-slate-100 p-6 z-50 shadow-lg"
      >
        <div className="my-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-10 space-y-4 text-2xl font-bold">
          <ul className="flex flex-col space-y-10 list-none">
            {NavMenu.map((item) => {
              const isActive = pathname === item.link; // Check if current route matches link

              return (
                <li
                  key={item.id}
                  className={`${
                    isActive
                      ? "py-4 px-4 rounded-lg dark:text-white text-[#222222] dark:bg-slate-800 bg-slate-200"
                      : "opacity-75 px-4"
                  } transition-all duration-300 hover:opacity-100`}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-normal flex items-center gap-4"
                  >
                    <item.icon className="w-6 h-6" strokeWidth={2} />{" "}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
