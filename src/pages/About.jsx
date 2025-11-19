import { FaLaptopCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const About = () => {
  const aboutStats = [
    { icon: FaLaptopCode, value: '50+', label: 'Projects Completed' },
    { icon: FaRocket, value: '3+', label: 'Years Experience' },
    { icon: FaLightbulb, value: '500+', label: 'Problems Solved' },
    { icon: FaUsers, value: '20+', label: 'Happy Clients' }
  ];

  const interests = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Open Source',
    'Competitive Programming',
    'Teaching & Mentoring'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=700&fit=crop"
                alt="Profile"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-500 dark:bg-primary-700 rounded-full -z-10 opacity-20"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-100">
              Hi, I'm Ravidu Peiris
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a strong focus on building modern,
                scalable, and user-friendly web applications. With over 3 years of experience,
                I've worked on various projects ranging from e-commerce platforms to complex
                data visualization dashboards.
              </p>
              
              <p>
                My journey in tech started with a fascination for problem-solving and has evolved
                into a career where I get to turn ideas into reality through code. I'm proficient
                in both frontend and backend technologies, with a special love for React and Node.js.
              </p>
              
              <p>
                When I'm not coding, you'll find me contributing to open-source projects,
                participating in hackathons, or sharing knowledge with the developer community.
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                My Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
