"use client";

import works from "../utils/works";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      {works.map((work) => (
        <div key={work.id} className="mb-12">
          <Image
            src={work.img}
            alt={work.name}
            width={0}
            height={0}
            className="w-full h-[500px] object-cover rounded-3xl transition-transform group-hover:scale-105"
            priority
          />
        </div>
      ))}
    </section>
  );
}
