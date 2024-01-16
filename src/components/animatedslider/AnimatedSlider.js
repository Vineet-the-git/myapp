import React, { useState } from "react";
import "./AnimatedSlider.css";
import { motion } from "framer-motion";

const AnimatedSlider = () => {
  const [exchanged, setexchanged] = useState(false);

  const divVariants1 = {
    initial: {
      x: 0, // Adjust initial position as needed
      opacity: 1.0, // Optional opacity change
    },
    selected: {
      x: '150%', // Adjust selected position as needed
      opacity: 1.0,
    },
  };

  const divVariants2 = {
    initial: {
      x: "-150%", // Adjust initial position as needed
      opacity: 1.0, // Optional opacity change
    },
    selected: {
      x: '20%', // Adjust selected position as needed
      opacity: 1,
    },
  };

  const handleClick = (id) => {
    if(id === 1) {
      return;
    }
    setexchanged(!exchanged);
  };

  return (
    <div className="slider">
      <motion.div
        className="selected-tab"
        key={1}
        variants={divVariants1}
        initial="initial"
        animate={exchanged ? 'selected' : 'initial'}
        layout
        onClick={() => handleClick(1)}
      >
        {/* Content of div 1 */}
      </motion.div>
      <motion.div
        className="tab"
        key={2}
        variants={divVariants2}
        initial="initial"
        animate={!exchanged ? 'selected' : 'initial'}
        layout
        onClick={() => handleClick(2)}
      >
        {/* Content of div 2 */}
      </motion.div>
    </div>
  );
};

export default AnimatedSlider;
