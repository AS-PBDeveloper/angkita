import React from "react";
import ProjectLook from "./Buttons/ProjectsLook";
import { motion } from "framer-motion";
import { useDarkContext } from "../Contexts/DarkModeContext";

function ProjectsWorks({ items }) {
  const { mode } = useDarkContext();
  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <img
          className="rounded-xl mb-3 border shadow"
          src={items.image}
          alt={`${items.name} – ${items.tagLine}`}
          width={1500}
          height={750}
          loading="lazy"
        />
        <div className="font-inter flex items-center justify-between">
          <div>
            <p className="font-medium">{items.name}</p>
            <p
              className={`text-sm ${mode ? `text-gray-400` : `text-gray-600`}`}
            >
              {items.tagLine}
            </p>
          </div>
          <ProjectLook hover={true} link={items.link} />
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsWorks;
