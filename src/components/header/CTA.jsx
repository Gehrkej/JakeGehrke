import React from "react";
import "./header.css";
import { motion } from 'framer-motion';
import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <motion.div className="cta" animate={{  scale: [1, 1.5, 1] }} transition={{ duration: 1.5 }}>
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default CTA;
