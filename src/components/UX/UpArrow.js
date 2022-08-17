import React from 'react';
import { motion } from 'framer-motion';
const UpArrow = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      fill={props.fill}
      className="up-arrow"
    >
      <motion.path
        // fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: 0, y: 0 }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.svg>
  );
};

export default UpArrow;
