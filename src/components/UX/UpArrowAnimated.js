import React from 'react';
import { motion } from 'framer-motion';
import UpArrow from './UpArrow';

const UpArrowAnimated = () => {
  return (
    <motion.div className="up-arrow">
      <UpArrow />
    </motion.div>
  );
};
