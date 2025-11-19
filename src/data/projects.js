// Projects data for the portfolio
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    longDescription: "Built a comprehensive e-commerce platform using React, Node.js, and MongoDB. Features include user authentication with JWT, product catalog with search and filtering, shopping cart functionality, order management, and Stripe payment integration. Implemented admin dashboard for product and order management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-demo.vercel.app",
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "A modern task management application with drag-and-drop functionality, team collaboration, and real-time updates.",
    longDescription: "Developed a collaborative task management system with features like drag-and-drop task organization, team workspaces, real-time notifications, file attachments, and deadline tracking. Utilized React for frontend, Firebase for backend, and Socket.io for real-time communication.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["React", "Firebase", "Socket.io", "Material-UI", "Redux"],
    category: "Frontend",
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://taskmanager-demo.vercel.app",
    featured: true,
    date: "2024"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A responsive weather application that provides current weather and 7-day forecasts with beautiful UI/UX.",
    longDescription: "Created a weather forecast application using React and OpenWeather API. Features include current weather conditions, hourly and weekly forecasts, location search with autocomplete, geolocation support, and weather maps. Implemented dark mode and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "CSS3"],
    category: "Frontend",
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-demo.vercel.app",
    featured: false,
    date: "2023"
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by natural language processing for customer support automation.",
    longDescription: "Built an AI-powered chatbot using Python, Flask, and OpenAI GPT API. The chatbot can understand natural language queries, provide intelligent responses, and escalate complex issues to human agents. Includes conversation history, sentiment analysis, and multi-language support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    technologies: ["Python", "Flask", "OpenAI API", "NLP", "React", "WebSocket"],
    category: "AI/ML",
    githubLink: "https://github.com/yourusername/ai-chatbot",
    liveLink: null,
    featured: true,
    date: "2024"
  },
  {
    id: 5,
    title: "Social Media Analytics Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
    longDescription: "Developed a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features include real-time metrics tracking, custom date ranges, comparative analysis, automated reporting, and interactive charts. Built with React, D3.js, and integrated with social media APIs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "REST APIs"],
    category: "Data Visualization",
    githubLink: "https://github.com/yourusername/social-analytics",
    liveLink: "https://analytics-demo.vercel.app",
    featured: false,
    date: "2023"
  },
  {
    id: 6,
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.",
    longDescription: "Created a mobile fitness application using React Native. Features include workout logging, nutrition tracking with barcode scanner, progress photos, custom workout plans, and social features for sharing achievements. Integrated with health APIs for step counting and heart rate monitoring.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Health Kit API"],
    category: "Mobile",
    githubLink: "https://github.com/yourusername/fitness-tracker",
    liveLink: null,
    featured: false,
    date: "2023"
  }
];

// Get unique categories
export const projectCategories = ["All", ...new Set(projects.map(p => p.category))];
