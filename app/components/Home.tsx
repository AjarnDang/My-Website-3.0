"use client";

import Link from "next/link";
import works from "../utils/works";
import Image from "next/image";

export default function Works() {
  return (
    <section className="pr-12">
      {/* <h1 className="lg:text-3xl text-xl font-bold uppercase mb-4">Latest Works</h1> */}

      {works.slice(0, 5).map((work) => (
        <div key={work.id} className="mb-12">
          <Link href={work.link} target="_blank">
            <Image
              src={work.img}
              alt={work.name}
              width={0}
              height={0}
              className="w-full h-[500px] object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-75 cursor-pointer"
              priority
            />
          </Link>
        </div>
      ))}
    </section>
  );
}
