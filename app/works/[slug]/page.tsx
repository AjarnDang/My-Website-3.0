import { notFound } from "next/navigation";
import works from "@/app/utils/works";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface WorkDetailProps {
  params: { slug: string };
}

export default function WorkDetail({ params }: WorkDetailProps) {
  const work = works.find((w) => w.slug === params.slug);

  if (!work) return notFound(); // Handle 404 if work not found

  return (
    <section className="lg:pr-12">
      <div className="mb-8">
      <Link href="/works">
        <ArrowLeft />
      </Link>
      </div>
      <h1 className="text-3xl font-bold">{work.name}</h1>
      <p className="text-gray-600">{work.date}</p>
      <p className="mt-4">{work.desc}</p>
      <Image
        src={work.img}
        alt={work.name}
        className="mt-6 rounded-md w-full"
      />
    </section>
  );
}
