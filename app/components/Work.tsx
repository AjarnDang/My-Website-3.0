"use client";

import Link from "next/link";
import works from "../utils/works";
import Image from "next/image";

export default function Works() {
  return (
    <section className="pr-12 lg:space-y-12 lg:w-3/4 w-full">
      {/* <h1 className="lg:text-3xl text-xl font-bold uppercase mb-4">Latest Works</h1> */}
      {works.map((work) => (
        <div key={work.id} className="space-y-6 lg:mb-12 mb-8">
          <Link href={`/works/${work.slug}`}>
            <Image
              src={work.img}
              alt={work.name}
              width={0}
              height={0}
              className="w-full max-h-[400px] min-h-[300px] object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-75 cursor-pointer"
              priority
            />
          </Link>
          <div>
            <h2 className="lg:text-2xl text-xl font-bold">{work.name}</h2>
            <h6 className="text-slate-500">{work.date}</h6>
            <p className="my-4 leading-6">{work.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
