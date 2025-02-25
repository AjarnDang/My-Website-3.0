import { notFound } from "next/navigation";
import works from "@/app/utils/uxuiWorks";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface WorkDetailProps {
  params: { slug: string };
}

export default function WorkDetail({ params }: WorkDetailProps) {
  const work = works.find((w) => w.slug === params.slug);

  if (!work) return notFound();

  const permission = false;

  return (
    <div className="flex justify-center">
      <section className="lg:pr-12 lg:space-y-12 lg:w-3/4 w-full">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/works">
            <ArrowLeft className="opacity-50 hover:opacity-100 transition-opacity" />
          </Link>
          { permission && (
          <button className="before:ease rounded-full relative h-12 w-40 overflow-hidden bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
            <span className="relative z-10">
              Figma{" "} 
            </span>
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
          </button>
          )}
        </div>

        <div>
          <Image
            src={work.img}
            alt={work.name}
            className="mt-6 mb-10 min-w-full min-h-auto object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg"
          />
          <h1 className="text-3xl font-bold uppercase mb-8">Overview</h1>
          <div className="grid grid-cols-2">
            <p>Project name : {work.name}</p>
            <p className="text-gray-600">Created : {work.date}</p>
          </div>
          
          <p className="mt-4">{work.desc}</p>
        </div>
      </section>
    </div>
  );
}
