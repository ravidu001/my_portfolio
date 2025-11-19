// Projects data for the portfolio
export const projects = [
  {
    id: 1,
    title: "WanderLanka - Travel Platform",
    description: "A comprehensive all-in-one travel platform for Sri Lanka with microservices architecture, consolidating accommodation, transport, and guide services.",
    longDescription: "WanderLanka is a scalable and intelligent travel platform designed to transform the tourism experience in Sri Lanka. Developed using modern microservices architecture with 8 distinct services, it offers personalized travel planning, secure bookings, and real-time collaboration between travelers and local service providers. Features include custom itinerary planner with real-time weather & maps, booking system with Stripe payments, budget tracking, and experience sharing.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
    technologies: ["React.js", "React Native", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Stripe", "Google Maps API"],
    category: "Full Stack",
    githubLink: "https://github.com/WanderLanka",
    liveLink: null,
    featured: true,
    date: "2025"
  },
  {
    id: 2,
    title: "RaviTrends - E-Commerce Platform",
    description: "Production-ready e-commerce platform deployed on AWS EC2 with Docker containerization, CI/CD pipeline, and 100% uptime.",
    longDescription: "A full-stack e-commerce platform with complete DevOps implementation. Features multi-container Docker architecture, automated CI/CD pipeline with GitHub Actions, AWS EC2 hosting with Nginx reverse proxy, JWT authentication, Stripe payment integration, and dedicated admin dashboard. Includes secure user authentication, full CRUD operations, dynamic shopping cart, advanced search and filtering, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React 19", "Node.js 18", "Express", "MongoDB", "Docker", "AWS EC2", "Nginx", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    githubLink: "https://github.com/ravidu001/RaviTrends.git",
    liveLink: "http://16.171.232.156/",
    featured: true,
    date: "2025"
  },
  {
    id: 3,
    title: "Ravi-Movie App",
    description: "Full-stack React Native mobile application for movie discovery with secure authentication, personalized collections, and TMDB API integration.",
    longDescription: "Modern mobile application built with React Native and Expo, offering complete movie discovery experience. Features secure authentication with Appwrite, browse trending films, advanced search, personal collections with real-time sync, offline access, dark mode, and tab-based navigation. Includes profile customization and secure data handling with JWT-based auth.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    technologies: ["React Native", "Expo", "Appwrite", "TMDB API", "NativeWind", "AsyncStorage"],
    category: "Mobile",
    githubLink: "https://github.com/ravidu001/Ravi-Movie-App.git",
    liveLink: null,
    featured: true,
    date: "2025"
  },
  {
    id: 4,
    title: "My Todo App - Task Manager",
    description: "Full-stack MERN task management application with JWT authentication, priority levels, due dates, and real-time updates.",
    longDescription: "Modern task management application with secure user registration and login, password encryption with bcrypt, protected API routes, full CRUD operations, priority levels, due dates, tagging, status tracking, smart filters, search functionality, real-time updates, and detailed statistics dashboard. Features responsive layout, smooth animations, and dark mode support.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Vite"],
    category: "Full Stack",
    githubLink: "https://github.com/ravidu001/my-todo-app.git",
    liveLink: "https://my-todo-app-frontend-jpcl.onrender.com",
    featured: false,
    date: "2025"
  },
  {
    id: 5,
    title: "VetiPlus - Veterinary Management System",
    description: "Comprehensive web-based veterinary management system with role-based access for doctors, assistants, salon staff, and administrators.",
    longDescription: "Full-stack veterinary clinic management system supporting multiple user types with role-specific functionalities. Features secure registration and login with user-type redirection, appointment scheduling for vet sessions and grooming, medical records access, e-certificate generation, admin dashboard for centralized control, feedback module, and dark mode toggle. Built with MVC architecture for maintainability.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=600&fit=crop",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "MVC Architecture"],
    category: "Full Stack",
    githubLink: "https://github.com/ravidu001/VetiPlusMVC.git",
    liveLink: null,
    featured: false,
    date: "2024-2025"
  },
  {
    id: 6,
    title: "Fire Fighter Drone Concept",
    description: "Embedded IoT prototype with dual ESP32 system for drone control, environmental monitoring, and remote operation via web dashboard.",
    longDescription: "Two-ESP32 drone control system completed in under 5 hours. Features drone unit with DHT11 sensor, ultrasonic distance sensors, LDR for light sensing, and directional LED indicators. Controller unit includes LCD display, 4x4 matrix keypad, web dashboard, and WiFi connectivity. Uses ESP-NOW for low-latency wireless communication with real-time sensor data transmission and dual control interfaces.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
    technologies: ["ESP32", "Arduino IDE", "IoT", "DHT11", "Ultrasonic Sensors", "ESP-NOW"],
    category: "IoT",
    githubLink: null,
    liveLink: null,
    featured: false,
    date: "2025"
  },
  {
    id: 7,
    title: "Octave Scientific Calculator",
    description: "Feature-rich scientific calculator with GUI built using GNU Octave, supporting advanced mathematics, statistics, and matrix operations.",
    longDescription: "Scientific calculator developed for academic and research use with comprehensive features including basic & advanced math (arithmetic, exponents, roots, trigonometry, logs, factorials), memory operations (M+, M-, MR, MC), matrix operations, statistical tools, complex numbers support, dark/light mode, angle toggle, and keyboard input. Compatible across Linux, Windows, and macOS.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop",
    technologies: ["GNU Octave", "Octave GUI", "Control Package", "Signal Package"],
    category: "Desktop",
    githubLink: "https://github.com/ravidu001/Octave-Scientific-Cal.git",
    liveLink: null,
    featured: false,
    date: "2025"
  },
  {
    id: 8,
    title: "Kamper - Campsite Booking Platform",
    description: "Full-stack MERN web application for discovering and booking campsites with gear rental functionality.",
    longDescription: "Web application for campsite discovery and booking with camping gear rentals. Developed booking system interface including booking page, bookings dashboard, booking widget, and date management component. Implemented CRUD operations with form validation preventing invalid inputs, user-specific booking management, and GitHub collaboration for version control.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    githubLink: "https://github.com/tharindu-dm/Kamper.git",
    liveLink: null,
    featured: false,
    date: "2024"
  },
  {
    id: 9,
    title: "DriveSense - UI/UX Design",
    description: "Mobile application UI/UX design for RevolUX 3.0 competition, promoting safer driving through performance rating system.",
    longDescription: "UI/UX design concept for driver safety application developed for RevolUX 3.0 designathon. Focused on Following & Suggestions and Stats Display sections, along with Settings interface. Contributed to usability and layout decisions ensuring consistency and user-friendliness. Designed to address road traffic accidents by promoting safer driving behavior through real-time data.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    technologies: ["Figma", "Adobe Photoshop", "UI/UX Design", "Prototyping"],
    category: "Design",
    githubLink: null,
    liveLink: null,
    featured: false,
    date: "2024"
  }
];

// Get unique categories
export const projectCategories = ["All", ...new Set(projects.map(p => p.category))];
