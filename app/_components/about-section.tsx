"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { fadeIn } from "@/app/_animations/variants";
import Image from "next/image";

const AboutSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      exit="hidden"
      id="about"
      className="flex justify-center items-center my-20 pt-8"
    >
      <div className="lg:flex-row lg:w-[80%] max-w-5xl flex flex-col items-center gap-12 w-[90%]">
        <Image
          src="/images/profile2.png"
          alt="Foto de perfil"
          className="w-96 h-auto border-2 border-solid border-border shadow-border shadow-lg rounded-full"
        />
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="md:text-6xl text-5xl text-primary">Olá,</h2>
            <p className="md:text-xl text-lg font-semibold">
              sou Diogo Jorge, tenho 21 anos e sou formado em Análise e
              Desenvolvimento de Sistemas. Foi durante o meu curso que descobri
              minha paixão pela programação, e desde 2022 tenho me dedicado a
              criar soluções escaláveis e eficientes para os mais diversos
              desafios.
            </p>
          </div>
          <p className="md:text-xl text-lg font-semibold">
            Minha especialidade é trabalhar com a stack JavaScript, incluindo
            tecnologias como{" "}
            <span className="text-primary">
              React, Node.js, Next.js e TypeScript
            </span>
            . Gosto de transformar ideias em produtos funcionais, sempre
            buscando a melhor experiência para o usuário. Se você precisa de
            alguém para dar vida ao seu projeto ou resolver problemas complexos
            com criatividade e eficiência, estou aqui para ajudar!
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkwhats.app/445301"
              target="blank"
              className="border-2 border-solid border-border px-4 py-2 rounded-md flex items-center gap-1 text-sm font-semibold transition hover:bg-border"
            >
              <FaWhatsapp size={20} /> Whatsapp
            </a>
            <a
              href="https://www.instagram.com/diogofernandoj"
              target="blank"
              className="border-2 border-solid border-border px-4 py-2 rounded-md flex items-center gap-1 text-sm font-semibold transition hover:bg-border"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
