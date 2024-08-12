"use client";

import { MdDownload } from "react-icons/md";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

const Navbar = () => {
  return (
    <motion.nav
      variants={fadeIn("down", 1.4)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className="w-full h-20 border-b border-solid border-border bg-background fixed z-20"
    >
      <div className="w-4/5 h-full mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-2xl">
          Diogo<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center lg:flex">
          <a
            href="#"
            className="text-muted font-semibold px-4 py-2 rounded-lg ease-in transition-all hover:bg-border hover:text-white"
          >
            Início
          </a>
          <a
            href="#benefits"
            className="text-muted font-semibold px-4 py-2 rounded-lg ease-in transition-all hover:bg-border hover:text-white"
          >
            Saiba mais
          </a>
          <a
            href="#projects"
            className="text-muted font-semibold px-4 py-2 rounded-lg ease-in transition-all hover:bg-border hover:text-white"
          >
            Projetos
          </a>
          <a
            href="#about"
            className="text-muted font-semibold px-4 py-2 rounded-lg ease-in transition-all hover:bg-border hover:text-white"
          >
            Quem sou
          </a>
        </div>

        <div className="lg:flex items-center gap-4 hidden">
          <a
            target="blank"
            href="https://linkwhats.app/445301"
            className="font-semibold text-primary text-center hover:underline"
          >
            Fale comigo
          </a>
          <a
            href="cv.pdf"
            download="cv"
            className="font-semibold text-white text-sm bg-primary px-4 py-2 rounded-full flex items-center gap-1 transition ease-in hover:bg-white hover:text-primary"
          >
            Baixar currículo <MdDownload />
          </a>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="flex flex-col items-center gap-4"
            >
              <SheetClose asChild>
                <a href="#">Início</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#benefits">Saiba mais</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#projects">Projetos</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#about">Quem sou</a>
              </SheetClose>
              <Separator />
              <a
                target="blank"
                href="https://linkwhats.app/445301"
                className="font-semibold text-primary text-center"
              >
                Fale comigo
              </a>
              <a
                href="cv.pdf"
                download="cv"
                className="font-semibold text-white text-sm mx-auto w-max bg-primary px-4 py-2 rounded-full flex items-center gap-1"
              >
                Baixar currículo <MdDownload />
              </a>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
