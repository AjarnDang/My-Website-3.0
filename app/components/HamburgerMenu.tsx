"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GlitchText } from "./GlitchedText";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="fixed inset-0 bg-white/80 z-40 transition-all"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-0 left-0 h-full w-64 bg-black text-white p-6 z-50 shadow-lg"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={32} />
        </button>
        <nav className="mt-10 space-y-4 text-2xl font-bold">
          <a
            href="#"
            className="block bg-lime-400 px-2 py-1 text-black rounded"
          >
            <GlitchText text="HOME" />
          </a>
          <a
            href="#"
            className="block hover:bg-white hover:text-black hover:px-2 hover:py-1 rounded transition-all"
          >
            <GlitchText text="WORKS" />
          </a>
          <a
            href="#"
            className="block hover:bg-white hover:text-black hover:px-2 hover:py-1 rounded transition-all"
          >
            <GlitchText text="ABOUT" />
          </a>
          <a
            href="#"
            className="block hover:bg-white hover:text-black hover:px-2 hover:py-1 rounded transition-all"
          >
            <GlitchText text="CONTACT" />
          </a>
        </nav>
      </motion.div>
    </>
  );
}
