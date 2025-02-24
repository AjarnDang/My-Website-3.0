import React from "react";
import Image from "next/image";
import avatar from "@/app/images/others/avatar.jpg";
import Experiences from "./Experiences";

export default function About() {
  return (
    <section className="pr-12 lg:space-y-12 lg:w-3/4 w-full">
      <Image
        src={avatar}
        width={0}
        height={0}
        alt="Me"
        className="w-full max-h-[400px] min-h-[300px] h-full object-cover rounded-3xl"
      ></Image>

        <h4 className="uppercase text-slate-500">About</h4>
        <h1 className="lg:text-4xl text-2xl font-bold">Thornthan Jomtharak</h1>
        <p className="leading-6">
          Hey, Thornthan’s here! I’m a Web Developer and UX/UI Designer who
          always inspired, fresh, and never stops learning.
        </p>
        <p className="leading-6">
          With a background in Information Technology and more than two years of
          industry experience, I specialize in designing and building
          functional, modern, and intuitive interfaces. Currently, I work
          full-time as a UX/UI Designer, where I bring ideas to life through
          Next.js, TypeScript, and Framer. Beyond design, I’m always exploring
          Web3 technologies, experimenting with decentralized applications
          (dApps), blockchain UX, and digital ownership.
        </p>
        <h4 className="uppercase text-slate-500">Experiences</h4>
        <Experiences />
    </section>
  );
}
