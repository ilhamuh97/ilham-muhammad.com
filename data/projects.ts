import type { Project } from "@/types/project";

export const projectsSectionMeta = {
  index: "02",
  kicker: "02 / Work",
  heading: "My Projects",
};

export const projects: Project[] = [
  {
    slug: "classifyai",
    name: "ClassifyAI",
    link: "https://classify-ai.vercel.app/",
    techStack: ["React", "Tensorflow.js", "p5.js", "Ant Design", "ApexCharts"],
    description:
        "The ClassifyAI web-based application enables users to create image classification models through a simple, code-free interface, accessible on both desktop and mobile devices. It guides users through four main steps: class creation, parameter setup, training, and real-time prediction testing.",
    status: "done",
    detail: {
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
        Frontend: ["React", "Typescript", "Tailwind", "Shadcn"],
        "Machine Learning": [
          "TensorFlow.js",
          "Image Classification",
          "Transfer Learning",
        ],
        Visualization: ["p5.js"],
        Development: ["Netlify"],
      },
      images: [
        "/assets/classifyai1.png",
        "/assets/classifyai2.png",
        "/assets/classifyai3.png",
        "/assets/classifyai4.png",
        "/assets/classifyai5.png",
        "/assets/classifyai6.png",
        "/assets/classifyai7.png",
        "/assets/classifyai8.png",
      ],
    },
  },
  {
    slug: "iwkz",
    name: "IWKZ Platform",
    link: "https://iwkz.de",
    techStack: [
      "Next.js",
      "Strapi",
      "Docker",
      "Portainer",
      "Nginx Manager",
    ],
    description:
        "IWKZ Platform is a digital platform built for the Indonesian community in Berlin, serving as a central hub for community news, events, and resources.",
    status: "done",
    detail: {
      fullDescription: `IWKZ Platform serves both the general public and internal members of the Indonesian community in Berlin. Visitors can browse the list of upcoming events, read the latest community news, and check the prayer schedule, while members can make donations directly through the platform to support community programs. The whole platform is available in Indonesian and German, so it stays accessible to the community and to the wider German-speaking public.

One of the platform's key features is real-time donation tracking. Strapi doesn't just power the landing page as a CMS, it also acts as the main API gateway, pulling finance data from NocoDB so the app can display the real, up-to-date status of donations instead of static figures.

The whole stack is containerized with Docker and managed through Portainer, making it easier to deploy and monitor the platform's services, with Nginx Manager handling the reverse proxy in front of everything.`,
      features: [
        "Donation services with real-time status tracking",
        "Prayer schedule for the community",
        "List of community events",
        "News and announcements",
        "Indonesian and German language translations",
        "Landing page content managed through Strapi CMS",
        "Containerized deployment managed with Docker and Portainer",
      ],
      challenges: [
        "Using Strapi as an API gateway to surface real-time finance data from NocoDB",
        "Keeping donation status accurate and in sync across the CMS, database, and app",
        "Serving both internal community members and general visitors from the same platform",
        "Orchestrating multiple containerized services reliably with Docker and Portainer",
      ],
      technologies: {
        Frontend: ["Next.js", "Tailwind","TypeScript", "Zustand"],
        Backend: ["Strapi"],
        Database: ["MySQL", "NocoDB"],
        Deployment: ["VPS", "Portainer", "Docker", "Nginx Manager", "GitHub Action"],
      },
      images: [
        "/assets/iwkz1.png",
        "/assets/iwkz2.png",
        "/assets/iwkz3.png",
        "/assets/iwkz4.png",
        "/assets/iwkz5.png",
      ],
    },
  },
  {
    slug: "dish-rag",
    name: "Dish RAG",
    link: "https://indo-dish-1.onrender.com",
    techStack: [
      "React.js",
      "Java SpringBoot",
      "Docker",
    ],
    description:
        "Dish RAG is a full-stack RAG (retrieval-augmented generation) chatbot for exploring food recipes. Users chat in natural language, and the assistant retrieves relevant recipes from a Postgres/pgvector store, answers questions about them, and can search, look up, and manage favorites on the user's behalf via tool calling.",
    status: "done",
    detail: {
      fullDescription: `Dish RAG is a full-stack RAG (retrieval-augmented generation) chatbot for exploring food recipes. Users chat in natural language, and the assistant retrieves relevant recipes from a Postgres/pgvector store, answers questions about them, and can search, look up, and manage favorites on the user's behalf via tool calling.

Beyond the chat itself, the app keeps a full conversation history per user, with renaming, pinning, and deleting conversations, and titles that are auto-generated from the first message. A separate recipe browsing view offers a paginated, sortable, and searchable list with autocomplete, plus a personal favorites collection.

Authentication supports local email/password login with JWT, alongside Google and GitHub OAuth2. Rather than relying on a shared OpenAI budget, each user brings their own OpenAI API key, stored encrypted at rest; the backend builds a per-user chat/embedding client from it, so there is no shared LLM billing.

The backend is built with Java 25, Spring Boot 4, and Spring AI for OpenAI chat and embeddings, backed by PostgreSQL with pgvector for semantic search. The frontend is a React 19 + TypeScript app built with Vite, using TanStack Query, Zustand, and Tailwind CSS. Everything ships as a single Docker image: a multi-stage build bundles the frontend into the backend jar as static resources, deployed through a GitHub Actions CI/CD pipeline.`,
      features: [
        "Recipe RAG chat with semantic search over pgvector embeddings, plus tool calling for recipe search, exact-title lookup, and favorites management",
        "Persisted conversation history with rename, pin/unpin, delete, and auto-generated titles",
        "Paginated, sortable, searchable recipe browsing with autocomplete",
        "Local email/password (JWT) login plus Google and GitHub OAuth2",
        "Bring-your-own encrypted OpenAI API key per user, so there is no shared LLM billing",
        "Profile management with Cloudinary-hosted profile pictures",
        "Per-user light/dark theme preference",
      ],
      challenges: [
        "Building a per-user OpenAI chat/embedding client at runtime from an encrypted, user-supplied API key",
        "Designing tool-calling flows so the assistant can reliably search, look up, and manage favorites on the user's behalf",
        "Tuning pgvector semantic search for accurate recipe retrieval",
        "Packaging the frontend and backend into a single multi-stage Docker image served from one container",
      ],
      technologies: {
        Frontend: [
          "React",
          "TypeScript",
          "Vite",
          "TanStack Query",
          "React Router",
          "Zustand",
          "Tailwind",
          "Shadcn",
        ],
        Backend: [
          "Java",
          "SpringBoot",
          "SpringBoot AI",
          "OpenAI API",
          "JPA",
          "Spring Security (JWT + OAuth2)",
          "Flyway",
          "Lombok",
        ],
        Database: ["PostgreSQL", "Supabase", "pgvector", "PG-Admin"],
        Storage: ["Cloudinary"],
        Deployment: ["Render", "Docker", "GitHub Action"],
      },
      images: [
        "/assets/dish-rag1.webp",
        "/assets/dish-rag2.png",
        "/assets/dish-rag3.png",
        "/assets/dish-rag4.png",
        "/assets/dish-rag5.png",
        "/assets/dish-rag6.png",
      ],
    },
  },
  {
    slug: "chat-app",
    name: "Chat Application",
    link: "https://chat-app-ie23.onrender.com/",
    techStack: [
      "React.js",
      "Node.js",
      "socket.io",
      "DaisyUI",
      "MongoDB",
      "express.js",
    ],
    description:
        "A realtime chat application developed with React.js and Node.js, featuring a clean DaisyUI interface and MongoDB-based message storage. This project was built for learning purposes to understand realtime web communication using socket.io and full-stack integration.",
    status: "done",
    detail: {
      fullDescription: `This project is a realtime chat application that enables users to send and receive messages instantly through WebSocket communication using Socket.io. The system is designed to demonstrate the basic structure of modern web-based chat systems, combining a React frontend with a Node.js and Express backend. MongoDB is used to store user data and chat histories, while JWT and bcrypt handle authentication and password security. The project serves as a practical implementation for understanding how realtime communication and state synchronization work in web applications.`,
      features: [
        "Realtime messaging using Socket.io",
        "User authentication with JWT and bcrypt",
        "Responsive interface built with React and DaisyUI",
        "Persistent message storage in MongoDB",
        "Deployed on Render with MongoDB Atlas integration",
      ],
      challenges: [
        "Handling message synchronization between multiple users in realtime",
        "Managing socket connections and disconnections efficiently",
        "Ensuring secure authentication and message handling",
      ],
      technologies: {
        Frontend: ["React", "DaisyUI", "socket client", "Zustand"],
        Backend: ["Node.js", "Express.js", "RESTful APIs", "socket"],
        Database: ["MongoDB", "Mongoose"],
        Authentication: ["JWT", "bcrypt"],
        Deployment: ["OnRender", "MongoDB Atlas"],
      },
      images: [
        "/assets/chat1.png",
        "/assets/chat2.png",
        "/assets/chat3.png",
        "/assets/chat4.png",
        "/assets/chat5.png",
      ],
    },
  },
  {
    slug: "preattentive-test",
    name: "Preattentive Test",
    link: "https://ilhamuh97.github.io/preattentive-test/",
    techStack: ["p5.js", "HTML", "CSS", "JavaScript"],
    description:
      "This is a small project developed to create a website that tests preattentive vision. The website aims to explore how preattentive processing functions in the human visual system.",
    status: "done",
    detail: {
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
  },
  {
    slug: null,
    name: "Hanoi Visualizer",
    link: "https://hanoi-viz.netlify.app/",
    techStack: ["SVG.js", "HTML", "CSS", "JavaScript"],
    description:
      "Hanoi Visualizer is a campus project that animates the execution of code for the Tower of Hanoi game. It helps visualize how the algorithm works step by step.",
    status: "done",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects
    .filter((project): project is Project & { slug: string } => project.slug !== null)
    .map((project) => project.slug);
}
