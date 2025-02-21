import oxjeff from "@/app/images/thumbnails/0xjeff.png";
import dabuzzzz from "@/app/images/thumbnails/dabuzzzz.png";
import thewatcher from "@/app/images/thumbnails/the-watcher.png";
import { StaticImageData } from "next/image";

interface WorkItem {
  id: number;
  name: string;
  img: StaticImageData;
  date: string;
  desc: string;
  category: string;
  tech: string[];
  link: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    name: "0xJeff",
    img: oxjeff,
    date: "Jan 2025",
    desc: "A personal portfolio website to showcase my projects, skills, and experience.",
    category: "Web Development",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://thornthan.dev",
  },
  {
    id: 2,
    name: "Crypto Dashboard",
    img: dabuzzzz,
    date: "Dec 2024",
    desc: "A dashboard to track cryptocurrency prices and trends in real time.",
    category: "Web3",
    tech: ["React", "Ethers.js", "Chakra UI"],
    link: "https://cryptodash.example.com",
  },
  {
    id: 3,
    name: "E-Commerce App",
    img: thewatcher,
    date: "Nov 2024",
    desc: "A modern e-commerce web application with a seamless shopping experience.",
    category: "E-Commerce",
    tech: ["Vue.js", "Nuxt", "Stripe API"],
    link: "https://ecommerce.example.com",
  },
];

export default works;
