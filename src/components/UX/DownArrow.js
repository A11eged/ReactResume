import React from 'react';
import { motion } from 'framer-motion';
const DownArrow = (props) => (
  <motion.svg
    width={props.width * props.scale}
    height={props.height * props.scale}
    fill={props.fill}
    viewBox={[props.x, props.y, props.w, props.h]}
    className="down-arrow"
    style={{
      // border: '0.5px solid blue',
      borderRadius: '50%',
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      top: props.top,
      display: 'flex',
      position: 'absolute',
      justifyItems: 'space-evenly',
    }}
  >
    <motion.path
      style={{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        position: 'relative',
      }}
      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      whileInView={{ opacity: 1 }}
      initial={{ y: 0 }}
      animate={{ y: 25 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
    />
  </motion.svg>
);

export default DownArrow;
