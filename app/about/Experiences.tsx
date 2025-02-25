import React from "react";
import experiences from "../utils/experiences";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Experiences() {
  return (
    <>
    <section className="space-y-6" id="uxui">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-3xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-800/50"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-400/80 sm:col-span-2">
            {exp.startYear} - {exp.endYear}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug">
              <div className=" text-xl font-bold">{exp.position}</div>
              <Link
                href={exp.companyLink}
                className="job-item inline-flex items-baseline font-medium leading-tight text-sm text-neutral-500 hover:text-scooter-300 focus-visible:text-scooter-300 group/link"
                target="_blank"
              >
                {exp.company}{" "}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
              </Link>
            </h3>
            <div className="mt-2 text-sm leading-6">{exp.desc}</div>
            <ul className="mt-2 flex flex-wrap" aria-label="Tech used">
              {exp.tech.map((tech, i) => (
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

    <section id="dev">
      
    </section>
    </>
  );
}
