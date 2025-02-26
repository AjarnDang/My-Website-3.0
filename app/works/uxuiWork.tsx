"use client";

import Link from "next/link";
import works from "../utils/uxuiWorks";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function UxuiWorks() {
  return (
    <section className="lg:pr-12 lg:space-y-16 space-y-8 lg:w-3/4 w-full lg:pb-24 pb-16 border-b border-slate-300">
      <h1 className="lg:text-3xl text-xl font-bold uppercase">UX/UI Design</h1>
      {works.map((work) => (
        <div
          key={work.id}
          className="lg:mb-12 lg:space-y-0 md:space-y-6 space-y-6 mb-8 lg:flex md:block block gap-8"
        >
          {/* href={`/works/${work.slug}`} */}
          <Link href={work.link} target="_blank">
            <Image
              src={work.img}
              alt={work.name}
              width={0}
              height={0}
              className="max-w-80 w-80 h-40 min-w-full max-h-auto min-h-64 object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-75 cursor-pointer"
              priority
            />
          </Link>
          <div>
            <div className="flex justify-between flex-wrap items-center">
              <div>
                {/* href={`/works/${work.slug}`} */}
                <Link
                  href={work.link}
                  target="_blank"
                  className="lg:text-2xl text-xl font-bold"
                >
                  {work.name}
                </Link>

                <h6 className="text-slate-500">{work.date}</h6>
              </div>
              <div>
                {work.figma != "" && (
                  <Link href={work.figma} target="_blank">
                    <button className="before:ease rounded-full relative h-10 w-28 overflow-hidden bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
                      <span className="relative z-10">Figma </span>
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <p className="my-6 leading-6">{work.desc}</p>

            <ul className="flex flex-wrap" aria-label="Tech used">
              {work.tech.map((tech, i) => (
                <li className="mr-1.5 mt-2" key={i}>
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-scooter-300 ">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
