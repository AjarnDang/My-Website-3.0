"use client";

import Link from "next/link";
import works from "../utils/works";
import Image from "next/image";

export default function Works() {
  return (
    <section className="lg:pr-12 lg:space-y-12 lg:w-3/4 w-full">
      {/* <h1 className="lg:text-3xl text-xl font-bold uppercase mb-4">Latest Works</h1> */}
      {works.map((work) => (
        <div key={work.id} className="lg:mb-12 lg:space-y-0 md:space-y-6 space-y-6 mb-8 lg:flex md:block block gap-8">
          <Link href={`/works/${work.slug}`}>
            <Image
              src={work.img}
              alt={work.name}
              width={0}
              height={0}
              className="max-w-[400px] w-80 h-40 min-w-full min-h-auto object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-75 cursor-pointer"
              priority
            />
          </Link>
          <div>
            <Link
              href={`/works/${work.slug}`}
              className="lg:text-2xl text-xl font-bold"
            >
              {work.name}
            </Link>
            <h6 className="text-slate-500">{work.date}</h6>
            <p className="my-4 leading-6">{work.desc}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
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
