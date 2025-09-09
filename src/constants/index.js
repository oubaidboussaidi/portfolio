const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Year of Hands-on Experience" }, // your main projects & practice
  { value: 3, suffix: " months", label: "Professional Experience" }, // 2 internships total
  { value: 8, suffix: "+", label: "Completed Projects" }, // all major projects: Restaurant app, SymBook, EduConnect, etc.
  { value: 6, suffix: "+", label: "Technologies Mastered" }, // Next.js, Symfony, Spring Boot, MongoDB, Supabase, MySQL
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  // Frontend
  { name: "Next.js", imgPath: "/images/tech/Next.png" },
  { name: "React.js", imgPath: "/images/tech/react.png" },
  { name: "Angular", imgPath: "/images/tech/Angular.png" },

  // Backend
  { name: "Symfony", imgPath: "/images/tech/Symfony.png" },
  { name: "Spring Boot", imgPath: "/images/tech/Springboot.png" },
  { name: "Python", imgPath: "/images/tech/Python.png" },

  // Databases
  { name: "SQL", imgPath: "/images/tech/sql.png" },
  { name: "MongoDB", imgPath: "/images/tech/mongodb.png" },

  // Tools & Management
  { name: "Git", imgPath: "/images/tech/Git.png" },
  { name: "Jira", imgPath: "/images/tech/Jira.png" },
  { name: "Figma", imgPath: "/images/tech/figma.png" },
  { name: "Flutter", imgPath: "/images/tech/Flutter.png" },
  { name: "kotlin", imgPath: "/images/tech/kotlin.png" },
];

export const techStackDescription =
  "I can work with any SQL/PLSQL framework, integrate APIs, manage projects with GitHub/Jira, and design with Figma.";


const expCards = [
  {
    review: "Oubaid showed strong curiosity and dedication during his internship, quickly grasping Big Data and Data Science concepts while contributing to front-office development. His hands-on approach and eagerness to learn were impressive.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Data Science & Front-Office Intern",
    date: "11 Jan 2024 - 8 Feb 2024",
    responsibilities: [
      "Researched Big Data frameworks and tools for data processing.",
      "Explored machine learning algorithms and data analysis methods.",
      "Assisted in front-office development, gaining hands-on coding experience.",
      "Documented findings and presented results.",
    ],
  },
  {
    review: "Oubaid adapted quickly to React and Spring Boot during his internship, developing the Tunisian Restaurant Web App and implementing an AI-powered sentiment analysis feature for user reviews. His commitment to learning and problem-solving stood out.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer Intern",
    date: "8 Jan 2025 - 6 Mar 2025",
    responsibilities: [
      "Built frontend features using React and backend APIs with Spring Boot.",
      "Tested API requests and responses using Postman.",
      "Integrated MongoDB for data storage and managed user authentication.",
      "Implemented AI-based sentiment analysis for restaurant reviews using Python.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};
