import { FaAward, FaCalendar, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                    <FaCertificate className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaAward className="mr-2" />
                      <span className="text-xs">{cert.credentialId}</span>
                    </div>
                  </div>
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" icon={<FaExternalLinkAlt />}>
                        Verify
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
