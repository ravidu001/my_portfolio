import { FaCalendar, FaGraduationCap, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/education';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and achievements"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={edu.id}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaCalendar className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-semibold">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                      <FaTrophy className="text-yellow-500 mr-2" />
                      Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
