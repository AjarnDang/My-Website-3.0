import React from "react";
import experiences from "../utils/experiences";

export default function Experiences() {
  return (
    <section className="space-y-6">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12"
        >
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-3xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-200/50"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-400/80 sm:col-span-2">
            {exp.startYear} - {exp.endYear}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-neutral-800">
              <div className="text-neutral-800/80 mt-1 text-xl font-bold">
                {exp.position}
              </div>
              <a
                href=""
                className="job-item inline-flex items-baseline font-medium leading-tight text-sm text-neutral-500 hover:text-scooter-300 focus-visible:text-scooter-300 group/link"
              >
                {exp.company} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" aria-hidden="true"> <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path> </svg>
              </a>
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
  );
}
