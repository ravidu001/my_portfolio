// Skills data organized by categories
export const skills = {
  "Frontend": [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Redux", level: 80, icon: "🔄" },
    { name: "Vue.js", level: 70, icon: "💚" }
  ],
  "Backend": [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Express", level: 85, icon: "🚂" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Django", level: 75, icon: "🎸" },
    { name: "Flask", level: 80, icon: "🌶️" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "GraphQL", level: 75, icon: "◈" }
  ],
  "Database": [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "PostgreSQL", level: 80, icon: "🐘" },
    { name: "MySQL", level: 80, icon: "🐬" },
    { name: "Redis", level: 70, icon: "🔴" },
    { name: "Firebase", level: 85, icon: "🔥" }
  ],
  "DevOps & Tools": [
    { name: "Git & GitHub", level: 95, icon: "🐙" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "CI/CD", level: 75, icon: "🔄" },
    { name: "Linux", level: 85, icon: "🐧" },
    { name: "Nginx", level: 70, icon: "🌐" }
  ],
  "Mobile": [
    { name: "React Native", level: 80, icon: "📱" },
    { name: "Expo", level: 75, icon: "🎯" },
    { name: "Flutter", level: 65, icon: "🦋" }
  ],
  "Other": [
    { name: "Data Structures", level: 90, icon: "🌳" },
    { name: "Algorithms", level: 85, icon: "🧮" },
    { name: "System Design", level: 80, icon: "🏗️" },
    { name: "Agile/Scrum", level: 85, icon: "🔄" },
    { name: "UI/UX Design", level: 75, icon: "🎨" }
  ]
};

// Skill categories for filtering
export const skillCategories = Object.keys(skills);
