"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Modal from "../components/Modal";
import { useState } from "react";

interface Work {
  id: number;
  name: string;
  slug: string;
  img: string;
  imgGallery: [];
  date: string;
  desc: string;
  category: string;
  tech: string[];
  link: string;
  figma?: string; // Optional for UX/UI
  github?: string; // Optional for Development
}

interface WorkListProps {
  title: string;
  works: Work[];
}

export default function WorkList({ title, works }: WorkListProps) {
  const [modalVisible, setModalVisible] = useState<number | null>(null);

  const handleOpenModal = (id: number) => setModalVisible(id);
  const handleCloseModal = () => setModalVisible(null);

  return (
    <section
      className={`
        lg:pr-12 lg:space-y-16 space-y-8 xl:w-3/4 lg:w-full w-full
        ${
          title === "UX/UI Design" &&
          "lg:pb-24 pb-16 lg:mb-24 mb-16 border-b dark:border-gray-700 border-gray-300"
        }
        `}
    >
      <h1 className="lg:text-3xl text-xl font-bold uppercase">{title}</h1>
      {works.map((work) => (
        <div
          key={work.id}
          className="lg:mb-12 lg:space-y-0 md:space-y-6 space-y-6 mb-8 lg:flex md:block block gap-8"
        >
          {/* Work Image with Link if available */}

          {work.imgGallery && work.imgGallery.length > 0 ? (
            // <Link
            //   onClick={handleOpenModal}
            //   target="_blank"
            //   className="relative block group h-fit"
            // >
            <div>
              <Image
                src={work.img}
                alt={work.name}
                width={0}
                height={0}
                onClick={() => handleOpenModal(work.id)} // Open modal with specific work id
                className="max-w-80 w-80 h-40 min-w-full max-h-auto min-h-48 object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-60 cursor-pointer"
                priority
              />
              {modalVisible === work.id && (
                <Modal
                  show={modalVisible === work.id}
                  onClose={handleCloseModal}
                  imgGallery={work.imgGallery}
                />
              )}
            </div>
          ) : (
            // <div className="md:flex hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
            //     <ArrowUpRight size={20} />
            //   </div>

            //   <div className="md:hidden flex absolute top-3 right-3 bg-green-500/80 text-white p-2 rounded-full opacity-100 transition-all duration-300">
            //     <ArrowUpRight size={20} strokeWidth={3} />
            //   </div>
            // </Link>

            <div>
              <Image
                src={work.img}
                alt={work.name}
                width={0}
                height={0}
                className="max-w-80 w-80 h-40 min-w-full max-h-auto min-h-64 object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg cursor-default"
                priority
              />
            </div>
          )}

          {/* Work Details */}
          <div>
            <div className="flex justify-between flex-wrap items-start">
              <div>
                {work.link ? (
                  <Link href={work.link} target="_blank" className="group/link">
                    <span className="lg:text-2xl text-xl font-bold hover:border-b transition-all">
                      {work.name}
                    </span>
                    <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                  </Link>
                ) : (
                  <p className="lg:text-2xl text-xl font-bold">{work.name}</p>
                )}
                <h6 className="text-slate-500">{work.date}</h6>
              </div>

              {/* Figma or GitHub Button */}
              {work.figma && (
                <Link href={work.figma} target="_blank">
                  <button className="rounded-full relative h-10 w-28 overflow-hidden bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
                    <span className="relative">Figma</span>
                    {/* <ArrowUpRight className="inline-block ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" /> */}
                  </button>
                </Link>
              )}

              {work.github && (
                <Link href={work.github} target="_blank">
                  <button className="rounded-full relative h-10 w-28 overflow-hidden bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
                    <span className="relative">GitHub</span>
                    {/* <ArrowUpRight className="inline-block ml-1 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" /> */}
                  </button>
                </Link>
              )}
            </div>

            <p className="my-6 leading-6">{work.desc}</p>

            {/* Tech Used */}
            <ul className="flex flex-wrap" aria-label="Tech used">
              {work.tech.map((tech, i) => (
                <li className="mr-1.5 mt-2" key={i}>
                  <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-scooter-300">
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
