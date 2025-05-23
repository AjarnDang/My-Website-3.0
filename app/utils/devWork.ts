/* eslint-disable @typescript-eslint/no-require-imports */
import legel from "@/app/images/thumbnails/dev/legal-thumbnail.png";
import wlc from "@/app/images/thumbnails/dev/wlc-thumbnail.png";
import duckking from "@/app/images/thumbnails/dev/duckking-thumbnail.png";
import imax from "@/app/images/thumbnails/dev/imax-thumbnail.jpg";
import viki from "@/app/images/thumbnails/dev/viki-thumbnail.jpg";
import spa from "@/app/images/thumbnails/dev/spa-thumbnail.jpg";
import axons from "@/app/images/thumbnails/dev/axons-thumbnail.jpg";
import digitalWorkflow from "@/app/images/thumbnails/dev/dw-thumbnail.png";

const importImages = (prefix: string, count: number): string[] =>
  Array.from(
    { length: count },
    (_, i) =>
      require(`@/app/images/thumbnails/dev/${prefix}${
        i === 0 ? "" : `-${i}`
      }.png`).default
  );

const devWorks = [
  {
    id: 1,
    name: "GA Messenger",
    slug: "ga-messenger",
    img: require("@/app/images/thumbnails/dev/ga-messenger.png").default,
    date: "Jan 2025",
    desc: "A web application for internal use only. The purpose is to create a transportation system for a sender who want to send the package and a messenger who will be delivered that package to the assigned destination. The functions including : CRUD a task, Assign (which can be multiple added) a tasks to messenger, CRUD messenger, Zone management, etc.",
    category: "Development",
    tech: [
      "Vue.js",
      "Vuex",
      "Tailwind CSS",
      "Axios",
      "Vue3 Toastify",
      "V-Calendar",
      "Toastify",
      "Nuxt UI",
    ],
    imgGallery: importImages("ga-messenger", 4),
    link: "https://uat-ga-messenger.inet.co.th/",
    github: "",
  },
  {
    id: 2,
    name: "Legal Management",
    slug: "legal-management",
    img: legel,
    date: "Nov 2024",
    desc: "The web application for an Internal use only. The purpose is to manage the various types of document, to summarize the information on annual report, to deliver the appropriate way of processing for each document, to manage role and permission for Legal Departments and etc.",
    category: "Development",
    tech: ["Vue.js", "Vuex", "Vuetify", "CSS", "Axios"],
    imgGallery: [],
    link: "https://legal-uat.inet.co.th/",
    github: "",
  },
  {
    id: 3,
    name: "Work Life Cycle (WLC)",
    slug: "work-life-cycle",
    img: wlc,
    date: "Sep 2024",
    desc: "WLC is a Web Application for anyone who wants to apply for the job and any company / business owner who wants to register their profile to the platform for recruitment. Developed by using Next.js for Applicant and Vue 2 for Company / Business Owner.",
    category: "Frontend Developer",
    tech: ["Vue.js", "Vuex", "Vuetify", "CSS", "Axios"],
    imgGallery: [],
    link: "https://adminworklifecycle.one.th/",
    github: "",
  },
  {
    id: 4,
    name: "Duckking for Worker",
    slug: "duckking-for-worker",
    img: duckking,
    date: "Jun 2024",
    desc: "Duck King Co., Ltd., a comprehensive duck producer, is dedicated to becoming the leading authority in the duck industry. The company continuously invests in research and development to enhance product quality, from selecting breeds and raising ducks to advanced production processes in state-of-the-art facilities. Our management system adheres to international standards, supported by highly skilled and specialized personnel. ",
    category: "Frontend Developer",
    tech: ["Vue.js", "Bootstrap", "Vuetify", "Axios"],
    imgGallery: [],
    link: "",
    github: "",
  },
  {
    id: 5,
    name: "IMAX Warranty",
    slug: "imax-warranty",
    img: imax,
    date: "Jun 2024",
    desc: "IMAX Power Tools Co., Ltd. is a distributor of power tools, power tool accessories, hardware, and gardening tools. Since the company's current system relies on Google Forms, there is a need to transition to a web application to enhance customer service and improve data management efficiency. This new system will be developed using Vue 3, Tailwind CSS, and DaisyUI.",
    category: "Frontend Developer",
    tech: [
      "Vue.js",
      "Tailwind CSS",
      "Daisy UI",
      "Data Mocking",
      "Data Binding",
    ],
    imgGallery: [],
    link: "https://warranty.imaxpowertool.co.th/login",
    github: "",
  },
  {
    id: 6,
    name: "Viki (Valorant Wikipedia)",
    slug: "viki",
    img: viki,
    date: "May 2024",
    desc: "A Website about Valorant game using Vue.js framework version 2, Vuetify and Valorant-API for Mock up data ",
    category: "Frontend Developer",
    tech: ["Vue.js", "Vuetify", "Axios", "Data Mocking", "Data Binding"],
    imgGallery: [],
    link: "https://viki-iota.vercel.app/",
    github: "https://github.com/AjarnDang/Viki",
  },
  {
    id: 7,
    name: "Global Demand Supply",
    slug: "global-demand-supply",
    img: axons,
    date: "Jun 2023",
    desc: "A Web application for product information management, purchase and sales data analysis, product management planning and more. By focusing on displaying dashboards and data tables using Next.js and Tailwind CSS (Frontend Developer)",
    category: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "Axios", "DevExtream"],
    imgGallery: [],
    link: "",
    github: "",
  },
  {
    id: 8,
    name: "Smart Profile",
    slug: "smart-profile",
    img: axons,
    date: "Aug 2023",
    desc: "A Project for creating and management in a company which has a variety of role or position. there's also many features. for instance, setting company information, setting roles, setting system information, setting permission and setting profile. this project using Next.js (Frontend Developer)",
    category: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "Axios", "DevExtream"],
    imgGallery: [],
    link: "",
    github: "",
  },
  {
    id: 9,
    name: "The Super App IoT",
    slug: "the-super-app-iot",
    img: spa,
    date: "Jan 2023",
    desc: "A Website for announcement to promote products of the Metro Systems Corporation 's IoT team using WordPress",
    category: "Frontend Developer",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS"],
    imgGallery: [],
    link: "https://thesuperappiot.metrosystems-des.com/",
    github: "",
  },
  {
    id: 10,
    name: "Digital Workflow",
    slug: "digital-workflow",
    img: digitalWorkflow,
    date: "Mar 2025",
    desc: "An internal web application for company in purpose of document management. Eg. Group management (insurance). Developed by using Next 15, Tailwind CSS with Ant Design.",
    category: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "Ant Design", "Axios", "Redux Toolkit", "React-pdf", "Fabric.js"],
    imgGallery: [],
    link: "https://digitalflow.one.th/v2/login",
    github: "",
  },
];

export default devWorks;
