"use client";

import { useState, useEffect } from "react";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Works from "../components/Works";

export default function Home() {
  const sections = [
    { id: "about", text: "About Me" },
    { id: "experience", text: "Experience" },
    { id: "works", text: "Works" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "about";

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="lg:pl-14 pt-14 md:pl-0 pl-0 h-full w-full">
      <div className="lg:flex h-full lg:px-48 px-16 lg:pt-24 pt-16 overflow-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8">
          {/* 🔹 Left (Sticky Navigation) */}
          <section className="flex flex-col justify-start gap-16 sticky top-24">
            <div>
              <h1 className="font-extrabold lg:text-5xl mb-4">
                Thornthan Jomtharak
              </h1>
              <h4 className="font-bold lg:text-xl mb-4">
                Experienced Web Developer & UX/UI Designer
              </h4>
              <p className="mb-4 leading-6">
                I craft digital experiences at the intersection of UX/UI, Web3,
                <br />
                and technology.
              </p>
            </div>

            {/* 🔹 Bullet Navigation with Text */}
            <div className="flex flex-col space-y-4">
              {sections.map(({ id, text }) => (
                <button
                  key={id}
                  className="flex items-center space-x-2"
                  onClick={() => scrollToSection(id)}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSection === id
                        ? "bg-black dark:bg-white scale-125"
                        : "bg-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm transition-opacity ${
                      activeSection === id ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {text}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* 🔹 Right (Content Sections) */}
          <section className="space-y-24">
            <div id="about">
              <About />
            </div>

            <div id="experience">
              <Experiences />
            </div>

            <div id="works">
              <Works />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
