import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Links from "./components/Links";
import { fadeIn } from "@/animations/variants";

const HomeSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className="relative w-[90%] max-w-2xl h-screen mx-auto pt-20 flex flex-col gap-4 justify-center items-center"
    >
      <img
        src="/images/profile-pic.svg"
        alt="Foto de perfil"
        className="h-24 w-24"
      />
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        Eleve seu negócio ao próximo nível{" "}
        <span className="text-primary">através da tecnologia</span>!
      </h2>
      <p className="text-muted font-semibold lg:text-lg text-center">
        Eu sou Diogo Jorge, desenvolvedor Full-Stack e aumento a lucratividade
        da sua empresa com soluções inovadoras.
      </p>
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
