import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projectDetails";
import { Project } from "@/app/types/project";

const projects: Project[] = [
  {
    slug: "classifyai",
    name: "ClassifyAI",
    link: "https://classify-ai.vercel.app/",
    techStack: ["React", "Tensorflow.js", "p5.js", "Ant Design", "ApexCharts"],
    description:
      "The ClassifyAI web-based application enables users to create image classification models through a simple, code-free interface, accessible on both desktop and mobile devices. It guides users through four main steps: class creation, parameter setup, training, and real-time prediction testing.",
    status: "done",
    fullDescription: `ClassifyAI is an easy-to-use web application that helps users create image classification models without writing any code. Designed to be simple and accessible, it works smoothly on both desktop and mobile devices.

The app guides users through four clear steps:

1. Class Creation: Users collect their dataset by capturing images from their camera and/or uploading existing images for each class. This step is focused on gathering data to train the model.

2. Parameter Setup: Users can adjust training settings like learning rate, batch size, and number of training rounds. Data augmentation can also be applied in this step to help improve model performance. The samples of augmented data can be seen in the image above. Helpful tips explain what each setting does.

3. Model Training: The model is trained directly in the browser using TensorFlow.js. This keeps user data private and removes the need for any server. During training, users can see real-time progress through charts and metrics.

4. Real-time Testing: After training, users can test the model right away with new images. The app shows predictions along with confidence scores, making it easy to check how well the model performs.`,
    features: [
      "Browser-based machine learning with TensorFlow.js",
      "Capture images from the camera and/or upload existing images.",
      "Real-time training progress visualization",
      "Mobile-responsive design",
      "No-code model creation",
      "Instant model testing and evaluation",
      "Data privacy with client-side processing",
      "Interactive charts with ApexCharts",
    ],
    challenges: [
      "Optimizing TensorFlow.js performance for browser-based training",
      "Creating an intuitive UI for complex ML concepts",
      "Ensuring consistent performance across different devices",
      "Implementing real-time training visualizations",
    ],
    technologies: {
      Frontend: ["React", "JavaScript", "HTML5", "CSS3"],
      "Machine Learning": [
        "TensorFlow.js",
        "Image Classification",
        "Transfer Learning",
      ],
      Visualization: ["p5.js", "ApexCharts"],
      "UI Framework": ["Ant Design"],
      Development: ["Webpack", "Babel", "ESLint"],
    },
    images: [
      "/assets/classifyai1.jpeg",
      "/assets/classifyai2.png",
      "/assets/classifyai3.png",
      "/assets/classifyai4.jpeg",
      "/assets/classifyai5.jpeg",
      "/assets/classifyai6.jpeg",
    ],
  },
  {
    slug: "saso-ecommerce",
    name: "SASO E-Commerce",
    link: "https://saso.iwkz.de/",
    techStack: ["Next.js", "Node.js", "Ant Design", "MongoDB", "express.js"],
    description:
      "SASO E-Commerce is a food ordering website created for the annual SASO food festival by IWKZ e.V. First launched in 2022, it made ordering easier and faster for visitors, while helping vendors and admins manage orders and stock in real time. Its success led to the development of IW-Commerce, a more flexible system for various events.",
    status: "done",
    fullDescription: `SASO E-Commerce is a website made to help with food orders at the yearly SASO food festival, which is organized by IWKZ e.V. It was first used at the SASO 2022 festival and was part of a move to make the event more modern and digital.

The website was built to handle special needs at the festival, such as many people ordering at the same time, keeping track of food stock in real time, and making payments easy and quick. It had to be strong enough to support hundreds of users at once while still being simple and fast to use.

The main goals were to make it easier for visitors to order food, shorten wait times, improve customer satisfaction, and help vendors see their stock levels in real time. It also allowed for contactless ordering, which was important after the pandemic, and provided useful reports and data for the event organizers.

This website was made not only for customers but also for the admin side, where admins can manage the orders made by customers and keep everything organized during the event.

Because the first version worked well, it later became IW-Commerce — a more flexible system that can be used for different events and vendors.`,
    features: [
      "Real-time order management system",
      "Inventory tracking and management",
      "Multi-vendor support",
      "Payment gateway integration",
      "Order status notifications",
      "Admin dashboard for event management",
      "Mobile-optimized interface",
      "Analytics and reporting tools",
    ],
    challenges: [
      "Handling high-volume concurrent orders during peak festival hours",
      "Implementing real-time inventory synchronization",
      "Ensuring system reliability during critical event periods",
      "Creating an intuitive interface for diverse user demographics",
    ],
    technologies: {
      Frontend: ["Next.js", "React", "Ant Design", "CSS3", "React Redux"],
      Backend: ["Node.js", "Express.js", "RESTful APIs"],
      Database: ["MongoDB", "Mongoose"],
      Authentication: ["JWT", "bcrypt"],
      Deployment: ["Vercel", "MongoDB Atlas"],
    },
    images: [
      "/assets/Saso1.png",
      "/assets/Saso2.png",
      "/assets/Saso3.png",
      "/assets/Saso4.png",
    ],
  },
  {
    slug: "chat-app",
    name: "Chat Application",
    link: "https://chat-app-ie23.onrender.com",
    techStack: ["React.js", "Node.js", "socket.io", "MongoDB", "express.js", "DaisyUI"],
    description:
      "A simple realtime chat application built using Socket.io for learning purposes.",
    status: "done",
    fullDescription: `This project is a realtime chat application that enables users to send and receive messages instantly through WebSocket communication using Socket.io. The system is designed to demonstrate the basic structure of modern web-based chat systems, combining a React frontend with a Node.js and Express backend. MongoDB is used to store user data and chat histories, while JWT and bcrypt handle authentication and password security. The project serves as a practical implementation for understanding how realtime communication and state synchronization work in web applications.`,
    features: [
      "Realtime messaging using Socket.io",
      "User authentication with JWT and bcrypt",
      "Responsive interface built with React and DaisyUI",
      "Persistent message storage in MongoDB",
      "Deployed on Render with MongoDB Atlas integration"
    ],
    challenges: [
      "Handling message synchronization between multiple users in realtime",
      "Managing socket connections and disconnections efficiently",
      "Ensuring secure authentication and message handling"
    ],
    technologies: {
      Frontend: ["React", "DaisyUI", "socket client", "Zustand"],
      Backend: ["Node.js", "Express.js", "RESTful APIs", "socket"],
      Database: ["MongoDB", "Mongoose"],
      Authentication: ["JWT", "bcrypt"],
      Deployment: ["OnRender", "MongoDB Atlas"]
    },
    images: [
      "/assets/chat1.png",
      "/assets/chat2.png",
      "/assets/chat3.png",
      "/assets/chat4.png"
    ],
  },
  {
    slug: "preattentive-test",
    name: "Preattentive Test",
    link: "https://ilhamuh97.github.io/preattentive-test/",
    techStack: ["p5.js", "HTML", "CSS", "JavaScript"],
    description:
      "This is a small project developed to create a website that tests preattentive vision. The website aims to explore how preattentive processing functions in the human visual system.",
    status: "done",
    fullDescription: `The Preattentive Test project is a simple web app made to help people learn how our eyes and brain quickly notice things without us trying. Preattentive processing means the brain sees and understands some visual information automatically before we focus on anything.

Background: Preattentive vision helps us quickly find patterns, differences, or unusual things in what we see.

Purpose: This app is made to teach and show how preattentive processing works. It is useful for students learning about how we see, designers who want to make clear and easy-to-use interfaces, researchers studying how people use computers, and anyone curious about how our vision works.

Interactive Tests: The website has different simple tests where users spot color, form, and a combined test of form and color called the conjunctive test. Users can change settings like how many distractors appear and how long the screen blinks to find the target. Each test helps explain how we quickly notice certain features and why they catch our attention.`,
    features: [
      "Interactive preattentive vision tests",
      "Real-time performance measurement",
      "Multiple test scenarios and variations",
      "Educational content about visual perception",
      "Responsive design for various devices",
      "Data visualization of test results",
      "Customizable test parameters",
      "Export functionality for results",
    ],
    challenges: [
      "Implementing precise timing measurements for visual tests",
      "Creating visually accurate stimuli using p5.js",
      "Ensuring consistent performance across different browsers",
      "Designing intuitive test interfaces",
    ],
    technologies: {
      Visualization: ["p5.js", "Canvas API"],
      Frontend: ["HTML5", "CSS3", "JavaScript ES6"],
      "Data Processing": ["JavaScript", "Local Storage"],
      Deployment: ["GitHub Pages", "Git"],
    },
    images: ["/assets/pt1.png", "/assets/pt2.png", "/assets/pt3.png"],
  },
];

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Ilham Muhammad`,
    description: project.description,
  };
}
