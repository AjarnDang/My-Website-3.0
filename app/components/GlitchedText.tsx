"use client"

import { useState, useEffect } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

export function GlitchText({ text }: { text: string }) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setGlitchedText(text); // Reset to original text when not hovered
      return;
    }

    let frame = 0;
    const maxFrames = text.length * 5; // Control speed of effect

    const interval = setInterval(() => {
      const newText = text
        .split("")
        .map((char, index) => {
          if (index < Math.floor(frame / 3)) return text[index]; // Reveal correct character gradually
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setGlitchedText(newText);
      frame++;

      if (frame >= maxFrames) clearInterval(interval); // Stop when fully revealed
    }, 50);

    return () => clearInterval(interval);
  }, [hovered, text]);

  return (
    <span
      className="font-bold text-xl transition-all duration-500 cursor-pointer min-w-fit "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {glitchedText}
    </span>
  );
}
