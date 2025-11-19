import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ${
        hover ? 'hover:shadow-xl' : ''
      } transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
