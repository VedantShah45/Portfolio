import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project4 from '../assets/projects/project-4.png'

export const HERO_CONTENT = "Hi, I'm Vedant, a dedicated Web and App Developer with a strong foundation in modern technologies and a passion for creating impactful digital solutions. Proficient in React, React Native, Node.js, and Express, I excel at building responsive, user-friendly frontends and efficient backends. With expertise in databases like PostgreSQL, MongoDB, and MySQL, I design scalable systems that meet diverse needs. My projects showcase a blend of creativity and technical prowess, from AI-powered platforms to dynamic e-commerce solutions. Let's connect and bring innovative ideas to life with cutting-edge technology!"

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ACHIEVEMENTS = [
  {
    year: "Nov 2024",
    title: "1st Place",
    company: "NITS Hacks 7.0, NIT Silchar",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js","Express","MongoDB", "Flask", "Llama API"],
  },
  {
    year: "Sept 2024",
    title: "3rd Place",
    company: "Eduhacks 1.0",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js","Express", "MongoDB", "Framer Motion"],
  },
];

export const PROJECTS = [
  {
    title: "Learnify",
    image:project1,
    description:
      "An AI-assisted academics management platform for colleges with AI-based assignment grading, quiz generation and evaluation, course roadmap generation and AI-powered Chatbot powered by Gemini and Llama API.",
    technologies: ["React.js","Express","MongoDB", "Flask", "Llama API","CharkraUI"],
  },
  {
    title: "VCabs",
    image:project2,
    description:
      "A cab booking application with real time ride fetching, payment gateway integration, recent rides tracking and user profile management by leveraging the use of OAuth 2.0, Stripe API, Google Maps API and NeonDB.",
    technologies: ["React-Native","Node","Firebase","Postgres","Zustand","NativeWind"],
  },
  {
    title: "Agriboost",
    image:project4,
    description:
      "A farmer-centric E-Commerce platform where users can shop for freshly grown farm products and fertilizers, completely cutting out the middle-man.",
    technologies: ["React.js","Express", "MongoDB"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8369040700",
  email: "vedantshah5445@gmail.com",
};