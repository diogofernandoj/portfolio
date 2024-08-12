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
      className="w-[90%] max-w-3xl md:w-[60%] lg:w-[50%] h-[calc(100vh-7rem)] lg:h-[calc(100vh-10rem)] mx-auto md:pt-40 pt-24 flex flex-col gap-4 justify-center items-center text-center"
    >
      <img
        src="/images/profile-pic.svg"
        alt="Foto de perfil"
        className="h-24 w-24"
      />
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Eleve seu negócio ao próximo nível{" "}
        <span className="text-primary">através da tecnologia</span>!
      </h2>
      <p className="text-muted font-semibold lg:text-lg">
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
    </motion.div>
  );
};

export default HomeSection;
