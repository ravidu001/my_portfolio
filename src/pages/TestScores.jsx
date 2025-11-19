import { FaChartLine, FaTrophy } from 'react-icons/fa';

import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { testScores } from '../data/testScores';

const TestScores = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="Test Scores & Achievements"
          subtitle="Standardized test scores and competitive programming achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testScores.map((test, index) => (
            <Card key={test.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <FaTrophy className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {test.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {test.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">
                      {test.score}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {test.date}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  {test.description}
                </p>

                {/* Breakdown */}
                {test.breakdown && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                      <FaChartLine className="text-primary-500 mr-2" />
                      Score Breakdown
                    </h4>
                    {Object.entries(test.breakdown).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {key}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-bold">
                          {value}
                        </span>
                      </div>
                    ))}
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

export default TestScores;
