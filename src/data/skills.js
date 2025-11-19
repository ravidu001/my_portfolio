// Skills data organized by categories
export const skills = {
  "Frontend": [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "React Native", level: 90, icon: "�" },
    { name: "JavaScript (ES6+)", level: 95, icon: "�" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 92, icon: "💨" },
    { name: "Vite", level: 88, icon: "⚡" },
    { name: "Redux", level: 80, icon: "🔄" },
    { name: "Material-UI", level: 85, icon: "🎯" }
  ],
  "Backend": [
    { name: "Node.js", level: 92, icon: "🟢" },
    { name: "Express.js", level: 90, icon: "🚂" },
    { name: "PHP", level: 85, icon: "�" },
    { name: "Python", level: 88, icon: "🐍" },
    { name: "REST APIs", level: 93, icon: "🔌" },
    { name: "JWT Authentication", level: 90, icon: "�" },
    { name: "Microservices", level: 85, icon: "🏗️" }
  ],
  "Database": [
    { name: "MongoDB", level: 92, icon: "🍃" },
    { name: "MySQL", level: 88, icon: "�" },
    { name: "Appwrite", level: 82, icon: "🔧" }
  ],
  "DevOps & Cloud": [
    { name: "AWS EC2", level: 88, icon: "☁️" },
    { name: "Docker", level: 90, icon: "�" },
    { name: "CI/CD (GitHub Actions)", level: 85, icon: "�" },
    { name: "Nginx", level: 82, icon: "🌐" },
    { name: "Git & GitHub", level: 95, icon: "🐙" },
    { name: "Linux", level: 85, icon: "🐧" }
  ],
  "Mobile & IoT": [
    { name: "React Native", level: 90, icon: "�" },
    { name: "Expo", level: 88, icon: "🎯" },
    { name: "ESP32/Arduino", level: 85, icon: "🤖" },
    { name: "IoT Development", level: 82, icon: "�" },
    { name: "Embedded Systems", level: 80, icon: "⚙️" }
  ],
  "Tools & Design": [
    { name: "Figma", level: 85, icon: "🎨" },
    { name: "Adobe Photoshop", level: 82, icon: "🖼️" },
    { name: "UI/UX Design", level: 85, icon: "✨" },
    { name: "GNU Octave", level: 78, icon: "�" },
    { name: "Stripe Integration", level: 88, icon: "💳" },
    { name: "Google Maps API", level: 85, icon: "🗺️" }
  ],
  "Core Competencies": [
    { name: "Data Structures", level: 92, icon: "🌳" },
    { name: "Algorithms", level: 90, icon: "🧮" },
    { name: "Problem Solving", level: 95, icon: "💡" },
    { name: "System Architecture", level: 85, icon: "�️" },
    { name: "Agile Methodology", level: 82, icon: "🔄" },
    { name: "Team Leadership", level: 88, icon: "👥" }
  ]
};

// Skill categories for filtering
export const skillCategories = Object.keys(skills);
