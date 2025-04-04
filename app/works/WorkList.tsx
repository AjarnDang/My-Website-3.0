"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import Modal from "./Modal";
import { useState, useMemo, useEffect } from "react";

interface Work {
  id: number;
  name: string;
  slug: string;
  img: string;
  imgGallery?: string[];
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
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});
  const [preloadedGallery, setPreloadedGallery] = useState<string[]>([]);

  const handleOpenModal = (id: number) => {
    setModalVisible(id);
  };
  
  const handleCloseModal = () => setModalVisible(null);

  // เรียงลำดับผลงานตามวันที่ โดยเอาผลงานล่าสุดมาก่อน
  const sortedWorks = useMemo(() => {
    return [...works].sort((a, b) => {
      // แปลงวันที่จากรูปแบบสตริงเป็น Date object
      // สันนิษฐานว่ารูปแบบวันที่เป็น "Month Year" เช่น "May 2023"
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      // ถ้าวันที่ไม่สามารถแปลงได้โดยตรง ลองแปลงจากรูปแบบอื่น
      // เช่น "Month Year" -> "1 Month Year"
      const parseCustomDate = (dateStr: string) => {
        const parts = dateStr.split(' ');
        // ถ้าเป็นรูปแบบ "Month Year"
        if (parts.length === 2) {
          return new Date(`1 ${dateStr}`);
        }
        return new Date(dateStr);
      };
      
      // ใช้ custom parsing ถ้าการแปลงโดยตรงไม่ได้ผล
      const parsedDateA = isNaN(dateA.getTime()) ? parseCustomDate(a.date) : dateA;
      const parsedDateB = isNaN(dateB.getTime()) ? parseCustomDate(b.date) : dateB;
      
      // เรียงจากล่าสุดไปเก่าสุด (เลขมากไปน้อย)
      return parsedDateB.getTime() - parsedDateA.getTime();
    });
  }, [works]);

  // เมื่อผู้ใช้เปิด Modal ทำการโหลดรูปภาพในแกลเลอรี่ล่วงหน้า
  useEffect(() => {
    if (modalVisible !== null) {
      const selectedWork = works.find(work => work.id === modalVisible);
      if (selectedWork?.imgGallery && selectedWork.imgGallery.length > 0) {
        // โหลดรูปภาพในแกลเลอรี่ล่วงหน้า
        selectedWork.imgGallery.forEach(imgUrl => {
          if (!preloadedGallery.includes(imgUrl)) {
            const img = new window.Image();
            img.src = imgUrl;
            setPreloadedGallery(prev => [...prev, imgUrl]);
          }
        });
      }
    }
  }, [modalVisible, works, preloadedGallery]);

  // ฟังก์ชันสำหรับบันทึกสถานะการโหลดของรูปภาพ
  const handleImageLoad = (imageUrl: string) => {
    setLoadingImages(prev => ({
      ...prev,
      [imageUrl]: false
    }));
  };

  // ฟังก์ชันสำหรับเริ่มโหลดรูปภาพ
  const handleImageLoadStart = (imageUrl: string) => {
    if (loadingImages[imageUrl] === undefined) {
      setLoadingImages(prev => ({
        ...prev,
        [imageUrl]: true
      }));
    }
  };

  return (
    <section
      className={`
        lg:pr-0 lg:space-y-16 space-y-8 xl:w-4/5 lg:w-full w-full
        ${
          title === "UX/UI Design" &&
          "lg:pb-24 pb-16 lg:mb-24 mb-16 border-b border-theme"
        }
        `}
    >
      <h1 className="lg:text-3xl text-xl font-bold uppercase">{title}</h1>
      {sortedWorks.map((work) => {
        // เริ่มบันทึกสถานะการโหลดรูปภาพ
        handleImageLoadStart(work.img);
        
        return (
          <div
            key={work.id}
            className="lg:mb-12 lg:space-y-0 md:space-y-6 space-y-6 mb-8 lg:flex md:block block gap-8"
          >
            {/* Work Image with Link if available */}
            {work.imgGallery && work.imgGallery.length > 0 ? (
              <div className="relative block group h-full">
                {/* แสดง Skeleton ในขณะที่รูปภาพกำลังโหลด */}
                {loadingImages[work.img] && (
                  <div className="absolute inset-0 w-full h-full min-h-60 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-3xl z-0" />
                )}
                
                <Image
                  src={work.img}
                  alt={work.name}
                  width={0}
                  height={0}
                  onLoad={() => handleImageLoad(work.img)}
                  onClick={() => handleOpenModal(work.id)} // Open modal with specific work id
                  className={`max-w-80 w-80 h-40 min-w-full max-h-auto min-h-60 object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg hover:opacity-60 cursor-pointer z-10 relative ${
                    loadingImages[work.img] ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />

                <div className="flex absolute -top-3 -left-3 dark:bg-green-600 bg-green-500/80 text-white p-2 rounded-full transition-all duration-300 z-20">
                  <ImageIcon size={20} strokeWidth={2} />
                </div>

                {modalVisible === work.id && (
                  <Modal
                    show={modalVisible === work.id}
                    onClose={handleCloseModal}
                    imgGallery={work.imgGallery}
                  />
                )}
              </div>
            ) : (
              <div className="relative">
                {/* แสดง Skeleton ในขณะที่รูปภาพกำลังโหลด */}
                {loadingImages[work.img] && (
                  <div className="absolute inset-0 w-full h-full min-h-64 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-3xl z-0" />
                )}
                
                <Image
                  src={work.img}
                  alt={work.name}
                  width={0}
                  height={0}
                  onLoad={() => handleImageLoad(work.img)}
                  className={`max-w-80 w-80 h-40 min-w-full max-h-auto min-h-64 object-cover object-center rounded-3xl transition-all duration-300 filter shadow-lg cursor-default z-10 relative ${
                    loadingImages[work.img] ? "opacity-0" : "opacity-100"
                  }`}
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
                    <button className="rounded-full relative h-10 w-28 overflow-hidden bg-neutral-700 dark:bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
                      <span className="relative">Figma</span>
                    </button>
                  </Link>
                )}

                {work.github && (
                  <Link href={work.github} target="_blank">
                    <button className="rounded-full relative h-10 w-28 overflow-hidden bg-neutral-700 dark:bg-neutral-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 group/link">
                      <span className="relative">GitHub</span>
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
        );
      })}
    </section>
  );
}
