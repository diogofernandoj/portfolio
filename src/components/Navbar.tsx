"use client";

import { MdDownload } from "react-icons/md";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

const Navbar = () => {
  return (
    <motion.nav
      variants={fadeIn("down", 1)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className="w-full h-20 border-b border-solid border-border bg-background fixed z-20"
    >
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-2xl">
          Diogo<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#">
            <Button variant="ghost" className="text-sm opacity-75">
              Início
            </Button>
          </a>
          <a href="#benefits">
            <Button variant="ghost" className="text-sm opacity-75">
              Saiba mais
            </Button>
          </a>
          <a href="#projects">
            <Button variant="ghost" className="text-sm opacity-75">
              Projetos
            </Button>
          </a>
          <a href="#about">
            <Button variant="ghost" className="text-sm opacity-75">
              Quem sou
            </Button>
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
            className="font-semibold text-white text-sm mx-auto w-max bg-primary px-4 py-2 rounded-full flex items-center gap-1 transition hover:scale-95"
          >
            Baixar currículo <MdDownload />
          </a>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="top" className="flex flex-col gap-4">
            <SheetClose>
              <a href="#">Início</a>
            </SheetClose>
            <SheetClose>
              <a href="#benefits">Saiba mais</a>
            </SheetClose>
            <SheetClose>
              <a href="#projects">Projetos</a>
            </SheetClose>
            <SheetClose>
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
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;