import { skillCategories, skills } from '../data/skills';

import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills[selectedCategory]?.map((skill, index) => (
            <Card key={skill.name} hover={false}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            </Card>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary-500 to-blue-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90">
              I'm constantly exploring new technologies and improving my skills.
              Currently learning advanced system design patterns and cloud architecture.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
