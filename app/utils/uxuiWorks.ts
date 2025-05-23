/* eslint-disable @typescript-eslint/no-require-imports */

import runads from "@/app/images/thumbnails/uxui/runads.png";
import msgdsc from "@/app/images/thumbnails/uxui/msc-dsg.png";
import toyotaidm from "@/app/images/thumbnails/uxui/toyota-idm.png";
import ofas from "@/app/images/thumbnails/uxui/ofas.png";

const importImages = (prefix: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) =>
    require(`@/app/images/thumbnails/uxui/${prefix}${i === 0 ? "" : `-${i}`}.png`).default
  );

const uxuiWorks = [
  {
    id: 1,
    name: "0xJeff",
    slug: "0xjeff",
    img: require("@/app/images/thumbnails/uxui/0xjeff.png").default,
    date: "Feb 2025",
    desc: "Personal Web Application for @Defi0xJeff at Twitter (X) inspired by Web3, Blockchain, Crypto, NFTs...",
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
    imgGallery: importImages("0xjeff", 4),
    figma: "",
  },
  {
    id: 2,
    name: "DABUZZZZ",
    slug: "dabuzzzz",
    img: require("@/app/images/thumbnails/uxui/dabuzzzz.png").default,
    date: "Oct 2024",
    desc: "Dabuzzzz Style Studio, where every cut, color, and style is crafted with passion and precision...",
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
    imgGallery: importImages("dabuzzzz", 8),
    figma:
      "https://www.figma.com/design/GKKKB5ceWoObrlR7rXM3Ex/DABUZZZZ-HAIR-STUDIO?node-id=1-35&t=0FQd1rta5Nn3Z3eT-1",
  },
  {
    id: 3,
    name: "The Watcher",
    slug: "the-watcher",
    img: require("@/app/images/thumbnails/uxui/the-watcher.png").default,
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
    link: "",
    imgGallery: importImages("the-watcher", 7),
    figma:
      "https://www.figma.com/design/XmVHtNwnSmAB2ciCVRZ5zB/THE-WATCHER?node-id=65-2280&t=A0MnszmOaT978yLt-1",
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
    link: "",
    imgGallery:  importImages("runads", 9),
    figma: "",
  },
  {
    id: 5,
    name: "Trademan",
    slug: "trademan",
    img: require("@/app/images/thumbnails/uxui/trademan.png").default,
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
    imgGallery: importImages("trademan", 3),
    figma:
      "https://www.figma.com/design/VlS19VWPMGFigFN6aNyLr6/Trademan?node-id=292-166&t=7WTufNiVRC0ZEKaV-1",
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
    link: "",
    imgGallery: importImages("msc-dsg", 5),
    figma:
      "https://www.figma.com/design/bH2nDF2Su4xQn4VZGUqTGo/Metrosystems-DSG?node-id=0-1&t=AEu1mRR2N4hODLyK-1",
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
    link: "",
    imgGallery: importImages("toyota-idm", 10),
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
    link: "https://ofas.chula.ac.th/",
    imgGallery: importImages("ofas", 7),
    figma: "",
  },
];

export default uxuiWorks;
