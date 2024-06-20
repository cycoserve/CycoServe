import React from 'react';
import { motion } from 'framer-motion';

// Example data of tags with frequencies
const tags = [
  { name: 'JavaScript', count: 10 },
  { name: 'React', count: 8 },
  { name: 'Node.js', count: 6 },
  { name: 'TypeScript', count: 5 },
  { name: 'GraphQL', count: 3 },
  { name: 'CSS', count: 7 },
  { name: 'HTML', count: 4 },
  { name: 'Python', count: 9 },
  { name: 'Docker', count: 2 },
  { name: 'AWS', count: 6 },
  { name: 'MongoDB', count: 3 },
  { name: 'PostgreSQL', count: 4 },
  { name: 'Git', count: 5 },
];

const TagCloud: React.FC = () => {
  // Calculate the range of counts
  const counts = tags.map(tag => tag.count);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  // Function to map count to a range of font sizes
  const getFontSize = (count: number): number => {
    const maxFontSize = 16;
    const minFontSize = 8;
    const range = maxCount - minCount;
    const fontSize = minFontSize + ((count - minCount) / range) * (maxFontSize - minFontSize);
    return fontSize;
  };

  return (
    <div className="tag-cloud">
      {tags.map(tag => (
        <motion.span
          key={tag.name}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ fontSize: `${getFontSize(tag.count)}px` }}
          className="tag"
        >
          {tag.name}
        </motion.span>
      ))}
    </div>
  );
};

export default TagCloud;
