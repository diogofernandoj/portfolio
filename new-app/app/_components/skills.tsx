"use client";

import { fadeIn } from "@/app/_animations/variants";
import { motion } from "framer-motion";
import { SKILLS } from "../_constants/skills";

const Skills = () => {
  return (
    <div className="overflow-hidden relative">
      <motion.h2
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
        className="text-center font-bold text-3xl mt-12 mb-8"
      >
        Tecnologias<span className="text-primary">.</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
        className="flex gap-6 w-auto animate-slide"
      >
        {SKILLS.concat(SKILLS).map((skill, index) => (
          <div
            key={index}
            className="flex-none w-20 h-20 flex items-center justify-center"
          >
            <span className="opacity-10">{<skill.icon size={50} />}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
