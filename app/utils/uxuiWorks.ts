import oxjeff from "@/app/images/thumbnails/0xjeff.png";
import dabuzzzz from "@/app/images/thumbnails/dabuzzzz.png";
import thewatcher from "@/app/images/thumbnails/the-watcher.png";
import runads from "@/app/images/thumbnails/runads.png";
import trademan from "@/app/images/thumbnails/trademan.png";
import msgdsc from "@/app/images/thumbnails/msc-dsg.png";
import toyotaidm from "@/app/images/thumbnails/toyota-idm.png";
import ofas from "@/app/images/thumbnails/ofas.png";
import { StaticImageData } from "next/image";

interface WorkItem {
  id: number;
  name: string;
  slug: string;
  img: StaticImageData;
  date: string;
  desc: string;
  category: string;
  tech: string[];
  link: string;
  figma: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    name: "0xJeff",
    slug: "0xjeff",
    img: oxjeff,
    date: "Feb 2025",
    desc: "Personal Web Application for @Defi0xJeff at Twitter (X) inspired by Web3, Blockchain, Crypto, NFTs and other modern technologies which include the Etherium, KPVerse, Optimism, etc.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Web3",
      "Prototyping",
      "Typography",
      "Responsive Web Design",
    ],
    link: "https://0xjeff.framer.website/",
    figma: "",
  },
  {
    id: 2,
    name: "DABUZZZZ",
    slug: "dabuzzzz",
    img: dabuzzzz,
    date: "Oct 2024",
    desc: "Dabuzzzz Style Studio, where every cut, color, and style is crafted with passion and precision! We are a full-service hair studio dedicated to the art of modern barbering and hairstyling, offering a personalized experience that combines high-quality techniques with a fresh, trendy approach.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "User Persona",
      "Adobe Photoshop",
      "Canva",
      "Prototyping",
      "Typography",
    ],
    link: "https://dabuzzzz.vercel.app/",
    figma: "https://www.figma.com/design/GKKKB5ceWoObrlR7rXM3Ex/DABUZZZZ-HAIR-STUDIO?node-id=1-35&t=0FQd1rta5Nn3Z3eT-1",
  },
  {
    id: 3,
    name: "The Watcher",
    slug: "the-watcher",
    img: thewatcher,
    date: "Oct 2024",
    desc: "The Watcher is mini project of web design. The project is about Smart Watch with a modern theme, flawless looks and elegant design. The key point is to create a Landing page for purchasing Smart Watch with some detail of the product.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "User Flow",
      "User Persona",
      "Adobe Photoshop",
    ],
    link: "#",
    figma: "https://www.figma.com/design/XmVHtNwnSmAB2ciCVRZ5zB/THE-WATCHER?node-id=65-2280&t=A0MnszmOaT978yLt-1",
  },
  {
    id: 4,
    name: "RunAds",
    slug: "run-ads",
    img: runads,
    date: "Jul 2024",
    desc: "RunAds is an innovative platform that blends interactivity, community, and creativity. At its core, it allows users to create engaging quizzes and questionnaires, making it a powerful tool for gathering opinions, conducting research, or simply having fun.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "User Flow",
      "User Persona",
      "Prototyping",
      "Typography",
      "Adobe Photoshop",
      "Responsive Web Design",
    ],
    link: "#",
    figma: "",
  },
  {
    id: 5,
    name: "Trademan",
    slug: "trademan",
    img: trademan,
    date: "Apr 2024",
    desc: "Trademan is a web application that trades Thai stocks through a browser developed by Effin. And a team specialized in programs and application trading systems used by Thai people for a long time, such as efin StockPickUp/ Efin Trade Plus/efin Mobile.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "Copy Writing",
      "Prototyping",
      "Typography",
      "Adobe Photoshop",
    ],
    link: "https://trademan.in.th/",
    figma: "https://www.figma.com/design/VlS19VWPMGFigFN6aNyLr6/Trademan?node-id=292-166&t=7WTufNiVRC0ZEKaV-1",
  },
  {
    id: 6,
    name: "MSC DSG",
    slug: "msc-dsg",
    img: msgdsc,
    date: "Apr, 2024",
    desc: "DSG’s investment in its Data Center Infrastructure has established the company as a reliable provider and guarantees system engineers the hands-on experience needed to develop and maintain their skills and confidence. Furthermore, it is a showcase that allows the sales staff to demonstrate and customers to test products.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "Copy Writing",
      "Prototyping",
      "Typography",
      "Adobe Photoshop",
    ],
    link: "https://www.metrosystems.co.th/business-units/dsg/",
    figma: "https://www.figma.com/design/bH2nDF2Su4xQn4VZGUqTGo/Metrosystems-DSG?node-id=0-1&t=AEu1mRR2N4hODLyK-1",
  },
  {
    id: 7,
    name: "Toyota IDM",
    slug: "toyota-idm",
    img: toyotaidm,
    date: "Nov 2023",
    desc: "A web application for setting up master data of back office systems of Toyota.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "Copy Writing",
      "Prototyping",
      "Typography",
      "Adobe Photoshop",
      "Bootstrap 5",
      "Responsive Web Design",
    ],
    link: "https://www.metrosystems.co.th/business-units/dsg/",
    figma: "",
  },
  {
    id: 8,
    name: "OFAS Chula",
    slug: "ofas-chula",
    img: ofas,
    date: "Dec 2023",
    desc: "The Sport Center of Chulalongkorn University. E-Reciept (Electronic Recipe) web application for internal uses and normal part for formal user including Registeration, Sport application, billing, etc.",
    category: "UX/UI Design",
    tech: [
      "Figma",
      "User Research",
      "Color Theory",
      "Graphic Design",
      "Copy Writing",
      "Prototyping",
      "Typography",
      "Adobe Photoshop",
      "Bootstrap 5",
      "Responsive Web Design",
    ],
    link: "https://ofas.chula.ac.th/sport",
    figma: "",
  },
];

export default works;
