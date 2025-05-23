import React from "react";
import Image from "next/image";
import me from "@/app/images/others/me_2.png";
import Experiences from "./Experiences";
import { Minus } from "lucide-react";

export default function About() {
  return (
    <section className="lg:pr-12 space-y-8 xl:w-3/4 lg:w-full w-full relative pb-12">
      <Image
        src={me}
        width={0}
        height={0}
        alt="Me"
        className="w-full max-h-[450px] min-h-[300px] object-cover object-[75%_25%] rounded-3xl"
      />

      {/* About Section */}
      <div className="relative">
        <Minus className="opacity-50" />
        <h4 className="lg:sticky lg:top-24 uppercase text-slate-500 pb-2">
          About
        </h4>
      </div>
      <h1 className="lg:text-4xl text-2xl font-bold">Thornthan Jomtharak</h1>
      <p className="leading-6">
        Hey, Thornthan&apos;s here! I&apos;m a Web Developer and UX/UI Designer who always inspired, fresh, and never stops learning.
      </p>
      <p className="leading-6">
        With a background in Information Technology and more than two years of industry experience, I specialize in designing and building
        functional, modern, and intuitive interfaces. Currently, I work full-time as a UX/UI Designer, where I bring ideas to life through
        Next.js, TypeScript, and Framer. Beyond design, I&apos;m always exploring Web3 technologies, experimenting with decentralized applications
        (dApps), blockchain UX, and digital ownership.
      </p>

      {/* Experiences Section */}
      <div className="relative">
        <Minus className="opacity-50" />
        <h4 className="lg:sticky lg:top-24 uppercase text-slate-500 pb-2">
          Experiences
        </h4>
      </div>
      <Experiences />
    </section>
  );
}
