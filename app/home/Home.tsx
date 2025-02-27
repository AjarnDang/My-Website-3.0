"use client";

import Link from "next/link";
import works from "../utils/uxuiWorks";
import Image from "next/image";
import { Minus, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="lg:pr-12">
      <div className="lg:hidden md:hidden flex flex-col gap-6 mb-12">
        <div>
          <h1 className="font-extrabold text-xl">Thornthan Jomtharak</h1>
          <h4 className="text-gray-400">
            UX/UI Designer and Frontend Developer
          </h4>
        </div>
        <p>
          Hey, Thornthan’s here! I’m a UX/UI Designer and Web Developer
          who always inspired, fresh, and never stops learning.
        </p>
      </div>
      {/* <h1 className="lg:text-3xl lg:hidden block text-xl font-bold uppercase mb-4">Latest Works</h1> */}
      <Minus className="lg:hidden md:hidden block opacity-50 mb-4" />
      {works.slice(0, 5).map((work) => (
        <div key={work.id} className="mb-12">
          {/* {`/works/${work.slug}`} */}
          <Link href="/works">
            <Image
              src={work.img}
              alt={work.name}
              width={0}
              height={0}
              className="w-full max-h-[500px] h-full min-h-auto object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-75 cursor-pointer"
              priority
            />
          </Link>
        </div>
      ))}
      <Link href="/works" className="inline-flex items-center font-medium leading-tight hover:border-b group">
        View Full Project Archive <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
      </Link>
    </section>
  );
}
