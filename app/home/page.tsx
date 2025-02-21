"use client";

import About from "../components/About";
import Experiences from "../components/Experiences";
import Works from "../components/Works";

export default function Home() {
  return (
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
  );
}
