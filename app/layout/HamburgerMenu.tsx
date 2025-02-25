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
          className="fixed inset-0 dark:bg-gray-900/80 bg-white/80  z-40 transition-all"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-0 left-0 h-full w-64 bg-slate-900 dark:bg-slate-100 text-white dark:text-[#222222] p-6 z-50 shadow-lg"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 dark:text-[#222222] text-white"
        >
          <X size={32} />
        </button>
        <nav className="mt-10 space-y-4 text-2xl font-bold">
          <ul className="flex flex-col space-y-6 list-none">
            {NavMenu.map((item) => {
                const isActive = pathname === item.link; // Check if current route matches link

                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={`${
                        isActive ? "font-bold" : "opacity-75"
                      } transition-all duration-300 hover:opacity-100`}
                    >
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
