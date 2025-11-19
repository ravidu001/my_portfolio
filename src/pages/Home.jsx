import { FaArrowRight, FaChevronDown, FaDownload } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialMedia } from '../data/socialMedia';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Problem Solver',
    'UI/UX Enthusiast'
  ];

  // Typing animation effect
  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium">
              Hi there! 👋 I'm
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-heading text-gray-900 dark:text-gray-100"
          >
            Ravidu Peiris
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="h-16">
            <p className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {displayText}
              <span className="typing-cursor"></span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Passionate about creating beautiful, functional, and user-friendly web applications.
            I love turning complex problems into simple, elegant solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialMedia.slice(0, 4).map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link to="/projects">
              <Button size="lg" icon={<FaArrowRight />}>
                View My Work
              </Button>
            </Link>
            <a href="/assets/Ravidu_Peiris.pdf" download>
              <Button variant="outline" size="lg" icon={<FaDownload />}>
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 dark:text-gray-500"
            >
              <p className="text-sm mb-2">Scroll to explore</p>
              <FaChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
