import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import LinkedIn from "@/app/images/logo/linkedin.svg";
import Github from "@/app/images/logo/github.svg";
import Behance from "@/app/images/logo/behance.svg";

export default function Contact() {
  return (
    <section className="lg:pr-12 lg:space-y-16 space-y-12 xl:w3-4 lg:w-full w-full">
      <h6 className="text-neutral-400 uppercase">Contact</h6>
      <h1 className="text-4xl font-bold uppercase">Let’s work together</h1>
      <p>
        Feel free to contact me and I can make your idea into successful
        business.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div>Location</div>
        <div>Khon Kaen, Thailand</div>
        <div>Email</div>
        <Link
          href="mailto:torntan.j@gmail.com"
          className="inline-flex items-baseline transition-all group/link"
        >
          torntan.j@gmail.com{" "}
          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
        </Link>
        <div>Phone</div>
        <Link
          href="tel:063-386-4998"
          className="inline-flex items-baseline transition-all group/link"
        >
          +66 063 386 4998{" "}
          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
        </Link>
        <div>Socials</div>
        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/thornthan-jomtharak-b10403279/"
            target="_blank"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors p-3 rounded-full"
          >
            <Image
              src={LinkedIn}
              width={0}
              height={0}
              alt=""
              className="w-7 h-7"
            />
          </Link>
          <Link
            href="https://github.com/AjarnDang"
            target="_blank"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors p-3 rounded-full"
          >
            <Image
              src={Github}
              width={0}
              height={0}
              alt=""
              className="w-7 h-7"
            />
          </Link>
          <Link
            href="https://www.behance.net/torntanjomthar"
            target="_blank"
            className="bg-neutral-200 hover:bg-neutral-300 transition-colors p-3 rounded-full"
          >
            <Image
              src={Behance}
              width={0}
              height={0}
              alt=""
              className="w-7 h-7"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
