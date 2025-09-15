import React from "react";
import { motion } from "framer-motion";
import { useDarkContext } from "../../Contexts/DarkModeContext";
function ViewAllWorks({ hover }) {
  const { mode } = useDarkContext();
  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`font-medium flex gap-2 border border-black py-2 px-3 rounded-3xl ${
            hover ? `hover:bg-black hover:text-white` : `bg-black text-white`
          } ${
            mode ? `border-white` : `border-black`
          } transition ease-linear duration-100`}
        >
          <a href="https://github.com/AS-PBDeveloper" target="_blank">
            Visit GitHub <i className="fa-brands fa-github"></i>
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default ViewAllWorks;
