import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

export const DESCRIPTION = `Aspiring Full Stack Web Developer with experience in game testing and quality assurance, driven by a strong passion for both games and technology. Beginning my career with a degree in game development, I started as a Game QA Tester. Over time, my interest in coding grew, leading me to pursue intensive web development courses and work on self-taught projects. Proficient in modern web technologies like the MERN stack (MongoDB, Express, React, Node.js), as well as relational databases such as PostgreSQL and MySQL, I’m excited to transition to a full-time development role, creating dynamic web applications and building interactive experiences through code.`;

export const ABOUT_TEXT = `Passionate about both games and technology,  I began my career in game testing after earning a degree in game development, driven by a love for games and their inner workings. Over time, I developed a strong interest in coding and building interactive experiences, which led me to transition into full-stack development. I’m now focused on creating dynamic web applications and honing my technical skills, excited to grow in the field and bring ideas to life through code.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "QA Tester",
    company: "CodeMasters Software",
    description: `Started my career in 2021 as a Game QA Tester on the Online Stability team, focused on identifying and resolving online issues within the game. Successfully managed continuous match sessions, ensuring smooth, uninterrupted gameplay without disruptions, disconnections, or reward loss. Proactively addressed potential crashes to enhance game stability and optimize the overall gaming experience and performance.`,
    projects: ["F1 2021"],
    platforms_and_tools: ["PS5", "PS4", "XBOX", "JIRA", "Testrail"],
  },
  {
    year: "2022 - 2023",
    role: "QA Tester 2",
    company: "Electronic Arts",
    description: `In my role focused on Functionality and Stability Testing, I conducted in-depth stability assessments by completing diverse career mode scenarios and online modes to ensure smooth and reliable gameplay. I also served as the primary Point of Contact for Stability Testing, where I developed detailed training materials and onboarding documentation to help new team members quickly integrate and adhere to testing protocols.`,
    projects: ["FIFA 23", "NHL23", "NHL24"],
    platforms_and_tools: [
      "PS5",
      "PS4",
      "XBOX",
      "JIRA",
      "Testrail",
      "Zephyr",
      "JAAS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Discord Bot : ChatGPT",
    image: project1,
    description:
      "A Fully Functional Discord Bot. It responds to user messages with coherent and relevant replies, simulating a natural conversation. The bot is built with Node.js and utilizes the Discord.js library for interacting with the Discord API.",
    technologies: ["discordJS", "OPENAI", "Node.js"],
  },
  {
    title: "Discord Bot : F1 Info",
    image: project2,
    description:
      "This Discord bot provides Formula 1 (F1) related information using data fetched from the Ergast API. It allows users to retrieve race results, qualifying results, driver standings, constructor standings, and race schedules for various seasons.",
    technologies: ["discordJS", "NodeJS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "TailwindCSS", "Framer motion"],
  },
  {
    title: "Health-Planner",
    image: project4,
    description:
      "A website that calculates the user's BMI and BMR based on the information they provide, while also estimating their daily caloric needs for optimal health and fitness planning. It also Gives you a sample diet plan with macros keeping in mind your daily caloric intake. Uses OPENAI's API to generate responses",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "TailWindCSS",
      "React-Router",
      "OPENAI",
    ],
  },
  {
    title: "Task Tracker (Work in Progress)",
    image: project5,
    description:
      "A task-tracking web application built with the MERN stack, featuring full CRUD functionality to help users efficiently manage their daily tasks. The project includes secure sign-up and sign-in capabilities, with user authentication and data validation implemented through Zod to ensure input accuracy and security.",
    technologies: [
      "React",
      "TailWindCSS",
      "ZOD",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
    ],
  },
];

export const CONTACT = {
  Linkedin: "https://www.linkedin.com/in/pranavkumbhar02/",
  email: "pranav.kumbhar02@gmail.com",
};
