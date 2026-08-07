import { GraduationCap, Briefcase } from "lucide-react";

export const journeySectionMeta = {
  index: "01",
  kicker: "01 / Journey",
  heading: "My Journey",
};

export const journeyItems = [
  {
    type: "work",
    current: true,
    title: "Full-Stack Engineering",
    organization: "PT Jobindo Indonesia, Jakarta, Indonesia",
    period: "Jan 2026 – Present",
    description:
      "Developing a full-stack job portal remotely using Laravel, React, and Inertia.js with MySQL, delivering core features for job seekers, employers, and job postings. Built an admin dashboard for platform monitoring and management, added Recharts-based data visualizations for actionable engagement insights, and improved SEO through meta tags and structured data to increase job listing visibility.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Java Development Bootcamp",
    organization: "neuefische GmbH, Germany",
    period: "May 2026 – Aug 2026",
    description:
      "Completed an intensive 16-week Weiterbildung program in Java development, covering the fundamentals of Java, Spring Boot, SQL and NoSQL databases with PostgreSQL and MongoDB, DevOps with Docker, and CI/CD using GitHub Actions, plus frontend development with React and TypeScript. Further lesson content included clean code practices, working in pairs and groups, Git workflow with GitHub, agile methods with Scrum and Kanban, and IntelliJ.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "International Media and Computing (MSc)",
    organization: "University of Applied Sciences, Berlin, Germany",
    period: "Apr 2021 – Apr 2025",
    description:
      "Completing a Master's degree in International Media and Computing, focusing on deeper topics in web development, artificial intelligence, and computer vision. Engaged in various projects that integrate these fields, enhancing my skills in both theoretical and practical aspects of computing.",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Frontend Development & Consulting",
    organization: "Bosch.io GmbH, Berlin, Germany",
    period: "May 2023 – Apr 2025",
    description:
      "Collaborated on the development of an internal logistics management application, focusing on front-end implementation using Angular, RxJS for efficient data handling, and data visualization with AG Grid and Highcharts. Contributed to unit testing with Jasmine and Karma, and participated actively in agile processes using Jira for task and sprint management.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Software Engineering",
    organization: "daato GmbH, Berlin, Germany",
    period: "Oct 2022 – Apr 2023",
    description:
      "Proficient in JavaScript and TypeScript, with experience processing Excel data into JSON for chart-based visualizations. Created configuration files to support ESG report generation using JavaScript/TypeScript frameworks.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Software Development",
    organization: "i-ways sales solutions GmbH, Berlin, Germany",
    period: "Apr 2020 – Mar 2022",
    description:
      "Collaborated on software development for e-commerce websites using ReactJS, CakePHP, MySQL, HTML5, CSS3, and JavaScript. Ensured quality through testing and contributed in agile environments using Scrum and Kanban methodologies.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "International Media and Computing (BSc)",
    organization: "University of Applied Sciences, Berlin, Germany",
    period: "Oct 2016 – Aug 2021",
    description:
      "Started my academic journey in International Media and Computing, focusing on visual computing and web development. Engaged in various projects related to artificial intelligence, computer vision, and web development.",
    icon: GraduationCap,
  },
];
