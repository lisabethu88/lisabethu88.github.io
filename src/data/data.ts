import { IJobData } from "../interfaces/IJobData";
import { IProjectData } from "../interfaces/IProjectData";

export const russianRougetteProjectData = {
  techStack: [
    "Python",
    "JavaScript",
    "CSS",
    "HTML",
    "Flask",
    "SQLAlchemy",
    "PostgreSQL",
    "React",
    "React Router",
    "Bootstrap",
    "Netlify",
    "Heroku",
  ],
  title: "Russian Rougette",
  description: "Eyeshadow Visualizer",
  imgPath: "../ezgif-7-d5a326020e.gif",
  githubLink: "https://github.com/lisabethu88/russian-rougette",
  demoLink: "https://russianrougette.com/",
} as IProjectData;

export const inspirationBoardProjectData = {
  techStack: [
    "Python",
    "JavaScript",
    "Typescript",
    "CSS",
    "HTML",
    "Flask",
    "SQLAlchemy",
    "PostgreSQL",
    "React",
    "React Router",
    "Reactstrap",
    "Heroku",
    "Tailwind CSS",
  ],
  title: "Inspiration Board",
  description: "Inspiration Board",
  imgPath: "../ezgif-3-6175ca69b7.gif",
  githubLink: "",
  demoLink: "https://inspiration-board-5f485eb163e1.herokuapp.com/",
} as IProjectData;

export const rockPaperScissorsProjectData = {
  techStack: ["JavaScript", "CSS", "HTML", "React", "Heroku"],
  title: "Rock, Paper, Scissors",
  description: "Rock, Paper, Scissors game",
  imgPath: "../ezgif-3-eed127bf7a.gif",
  githubLink: "",
  demoLink: "https://rock--paper--scissors-18922ab6f1c9.herokuapp.com/",
} as IProjectData;

export const skills = [
  "Javascript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Typescript",
  "Tailwind CSS",
  "Flask",
  "SQLAlchemy",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Firestore",
  "Python",
  "C++",
  "Responsive Design",
  "Collaboration",
  "Troubleshooting",
  "Communication",
];

export const hypeHerListItems = [
  "Part of a startup team building an interactive, gamified application using React, Typescript and CSS, running on Google Cloud.",
  "Designed and implemented front-end components using MUI to create an engaging and intuitive platform interface.",
  "Contributed to document store design and implemented Firestore database interactions.",
  "Worked closely with the product owner to define and develop the app experience, and to develop features aligned with the project's goals and requirements.",
];

export const squarehookListItems = [
  "Spearheaded the development of the front-end components for the 'Cloud Cost Control' FinOps dashboardresulting in an intuitive and user-friendly interface.",
  "Contributed to backend development of the 'Cloud Cost Control' application by creating controllers and models using C# ASP.NET.",
];

export const adaListItems = [
  "Assisted in rebuilding the Ada Developers Academy website.",
  "Improved website performance and user experience by optimizing code and reducing page load times.",
  "Implemented custom post types and taxonomies in WordPress, streamlining content management and enhancing website efficiency.",
];

export const jobsData: IJobData[] = [
  {
    title: "Lead Front End Developer",
    company: "To The She Power",
    date: "10 / 2023 - Present",
    listItems: hypeHerListItems,
  },
  {
    title: "Front End Developer",
    company: "SquareHook",
    date: "01/2021 - 06/2021",
    listItems: squarehookListItems,
  },
  {
    title: "Software Engineer Intern",
    company: "Ada Developers Academy",
    date: "02/2023 - 06/2023",
    listItems: adaListItems,
  },
];

export const projectsData: IProjectData[] = [
  russianRougetteProjectData,
  inspirationBoardProjectData,
  rockPaperScissorsProjectData,
];
