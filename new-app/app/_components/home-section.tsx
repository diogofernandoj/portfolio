"use client";

import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { fadeIn } from "@/app/_animations/variants";
import Links from "./links";

const HomeSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: true }}
      className="relative w-[90%] max-w-2xl h-screen mx-auto pt-20 flex flex-col gap-4 justify-center items-center"
    >
      <img
        src="/images/profile.png"
        alt="Foto de perfil"
        className="h-48 w-48 border-2 border-solid border-white rounded-full"
      />

      <motion.h2
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
        className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center"
      >
        Um bom <span className="text-primary font-bold">site</span> pode mudar o{" "}
        <span className="text-primary font-bold">rumo</span> do seu{" "}
        <span className="text-primary font-bold">negócio!</span>
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
        className="text-muted lg:text-lg text-center"
      >
        Eu sou Diogo Jorge, desenvolvedor Full-Stack e aumento a lucratividade
        da sua empresa através da tecnologia.
      </motion.p>
      <Links />
      <a
        href="#features"
        className="absolute bottom-0 animate-bounce transition hover:text-primary"
      >
        <MdKeyboardDoubleArrowDown size={36} />
      </a>
      <div className="absolute bg-[url('/images/background.png')] opacity-20 lg:h-1/2 h-1/3 md:w-[calc(100vw-6rem)] w-[calc(100vw-2rem)] z-[-1] bg-cover lg:-bottom-32 -bottom-20" />
    </motion.div>
  );
};

export default HomeSection;
