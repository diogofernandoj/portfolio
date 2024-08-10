import { fadeIn } from "@/animations/variants";
import { motion } from "framer-motion";
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaDocker, FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJest, SiPrisma } from "react-icons/si";

const SkillsSection = () => {
  const logos = [
    {
      id: 1,
      icon: <BiLogoJavascript size={50} />,
    },
    {
      id: 2,
      icon: <FaReact size={50} />,
    },
    {
      id: 3,
      icon: <FaNode size={50} />,
    },
    {
      id: 4,
      icon: <BiLogoTypescript size={50} />,
    },
    {
      id: 5,
      icon: <BiLogoPostgresql size={50} />,
    },
    {
      id: 6,
      icon: <SiPrisma size={50} />,
    },
    {
      id: 7,
      icon: <RiNextjsFill size={50} />,
    },
    {
      id: 8,
      icon: <BiLogoTailwindCss size={50} />,
    },
    {
      id: 9,
      icon: <SiJest size={50} />,
    },
    {
      id: 10,
      icon: <FaDocker size={50} />,
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <motion.h2
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="text-center font-bold text-3xl mt-12 mb-8"
      >
        Tecnologias<span className="text-primary">.</span>
      </motion.h2>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="flex gap-6 w-auto animate-slide"
      >
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex-none w-20 h-20 flex items-center justify-center"
          >
            <span className="opacity-10">{logo.icon}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
