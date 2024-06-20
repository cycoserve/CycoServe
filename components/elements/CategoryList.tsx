import React from 'react';
import { motion } from 'framer-motion';


// Example data of categories
const categories = [
  'Web Development',
  'Mobile Development',
  'Machine Learning',
  'Data Science',
  'Cloud Computing',
  'UI/UX Design',
  'DevOps',
  'Blockchain',
  'Cybersecurity',
  'Digital Marketing',
];

const CategoryList: React.FC = () => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          className="category-item border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {category}
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryList;
