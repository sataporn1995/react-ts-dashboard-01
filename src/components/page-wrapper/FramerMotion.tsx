import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: JSX.Element;
};

const FramerMotion: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
