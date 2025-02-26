import React from "react";
import Image from "next/image";
// import avatar from "@/app/images/others/avatar.jpg";
import me from "@/app/images/others/me_1.jpg";
import Experiences from "./Experiences";
import { Minus } from "lucide-react";

export default function About() {
  return (
    <section className="lg:pr-12 lg:space-y-12 space-y-8 lg:w-3/4 w-full relative">
      <Image
        src={me}
        width={0}
        height={0}
        alt="Me"
        className="w-full max-h-[450px] min-h-[300px] h-full object-cover object-[75%_25%] rounded-3xl"
      />

      {/* Sticky Title */}
      <div className="relative">
        <Minus className="opacity-50" />
        <h4 className="sticky top-24 uppercase text-slate-500 pb-2">
          About
        </h4>
      </div>
      <h1 className="lg:text-4xl text-2xl font-bold">Thornthan Jomtharak</h1>
      <p className="leading-6">
        Hey, Thornthan’s here! I’m a Web Developer and UX/UI Designer who always inspired, fresh, and never stops learning.
      </p>
      <p className="leading-6">
        With a background in Information Technology and more than two years of industry experience, I specialize in designing and building
        functional, modern, and intuitive interfaces. Currently, I work full-time as a UX/UI Designer, where I bring ideas to life through
        Next.js, TypeScript, and Framer. Beyond design, I’m always exploring Web3 technologies, experimenting with decentralized applications
        (dApps), blockchain UX, and digital ownership.
      </p>

      {/* Sticky Title for Experiences */}
      <div className="relative">
        <Minus className="opacity-50" />
        <h4 className="sticky top-24 uppercase text-slate-500 pb-2">
          Experiences
        </h4>
      </div>
      <Experiences />
    </section>
  );
}
