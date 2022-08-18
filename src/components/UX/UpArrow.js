import React from 'react';
import { motion } from 'framer-motion';
const UpArrow = (props) => {
  return (
    <div className="up-arrow-container" style={{ position: 'relative' }}>
      <motion.svg
        width={props.width * props.scale}
        height={props.height * props.scale}
        fill={props.fill}
        viewBox={[props.x, props.y, props.w, props.h]}
        className="up-arrow"
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
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          whileInView={{ opacity: 1 }}
          initial={{ y: 25 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
};

export default UpArrow;
