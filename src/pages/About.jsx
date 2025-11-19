import { FaLaptopCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const About = () => {
  const aboutStats = [
    { icon: FaLaptopCode, value: '9+', label: 'Major Projects' },
    { icon: FaRocket, value: '19+', label: 'Certifications' },
    { icon: FaLightbulb, value: '2024', label: "Director's List" },
    { icon: FaUsers, value: '3+', label: 'Leadership Roles' }
  ];

  const interests = [
    'Full Stack Development',
    'Mobile Apps (React Native)',
    'DevOps & Cloud (AWS)',
    'Microservices Architecture',
    'IoT & Embedded Systems',
    'UI/UX Design',
    'Competitive Programming',
    'Chess & Athletics'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom section-padding">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
              👋 Get to know me better
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer, problem solver, and lifelong learner
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Profile Picture & Quick Stats */}
          <div className="lg:col-span-1">
            {/* Profile Picture Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 sticky top-24">
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src="/Profile Picture.jpeg"
                    alt="Ravidu Peiris"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
                </motion.div>
                {/* Status Badge */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="text-center mt-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Ravidu Peiris
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  Full Stack Developer
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  📍 Colombo, Sri Lanka
                </p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-4 text-center"
                    >
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Story & Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Story Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-blue-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  My Story
                </h2>
              </div>
              
              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🎓</span>
                  <span>
                    I'm a passionate <strong className="text-primary-600 dark:text-primary-400">Computer Science undergraduate</strong> at the 
                    University of Colombo School of Computing (UCSC), specializing in full-stack development and modern web technologies. 
                    I've built diverse projects ranging from microservices travel platforms to production-ready e-commerce systems deployed on AWS.
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-2xl mt-1">💻</span>
                  <span>
                    My journey in tech is marked by hands-on experience with <strong className="text-primary-600 dark:text-primary-400">React, 
                    React Native, Node.js, MongoDB</strong>, and DevOps practices including Docker containerization and CI/CD pipelines. 
                    I've earned multiple HackerRank certifications in React, JavaScript, Python, and SQL, and achieved the 
                    <strong className="text-primary-600 dark:text-primary-400"> Director's List recognition in 2024</strong> at UCSC.
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🚀</span>
                  <span>
                    Beyond academics, I serve as a <strong className="text-primary-600 dark:text-primary-400">News & Content Creator for ISACA UCSC</strong>, 
                    Secretary for LevelStair UCSC, and hold leadership roles in the Computer Society. When I'm not coding, you'll find me 
                    competing in chess tournaments, exploring IoT projects, or mentoring fellow developers.
                  </span>
                </p>
              </div>
            </div>

            {/* Interests Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  What I Love
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group relative px-5 py-3 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 
                             hover:from-primary-100 hover:to-blue-100 dark:hover:from-primary-900/30 dark:hover:to-blue-900/30
                             text-primary-700 dark:text-primary-300 rounded-xl text-sm font-medium 
                             shadow-sm hover:shadow-md transition-all duration-300 cursor-default border border-primary-200 dark:border-primary-800"
                  >
                    {interest}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-primary-400/0 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Fun Facts Card */}
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 dark:from-primary-700 dark:to-blue-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-white/80 rounded-full"></div>
                <h2 className="text-3xl font-bold">
                  Quick Highlights
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Director's List 2024</p>
                    <p className="text-sm text-white/80">Academic Excellence at UCSC</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">♟️</span>
                  <div>
                    <p className="font-semibold">Chess Champion</p>
                    <p className="text-sm text-white/80">Strategic thinking & competition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏃</span>
                  <div>
                    <p className="font-semibold">4×100m Runner-up</p>
                    <p className="text-sm text-white/80">Team player & athletics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">☁️</span>
                  <div>
                    <p className="font-semibold">AWS Deployment</p>
                    <p className="text-sm text-white/80">Production-ready systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
