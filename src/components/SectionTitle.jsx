import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-600 rounded ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
