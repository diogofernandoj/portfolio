import { useEffect, useRef } from "react";
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
      icon: <BiLogoJavascript />,
    },
    {
      id: 2,
      icon: <FaReact />,
    },
    {
      id: 3,
      icon: <FaNode />,
    },
    {
      id: 4,
      icon: <BiLogoTypescript />,
    },
    {
      id: 5,
      icon: <BiLogoPostgresql />,
    },
    {
      id: 6,
      icon: <SiPrisma />,
    },
    {
      id: 7,
      icon: <RiNextjsFill />,
    },
    {
      id: 8,
      icon: <BiLogoTailwindCss />,
    },
    {
      id: 9,
      icon: <SiJest />,
    },
    {
      id: 10,
      icon: <FaDocker />,
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const clonedItems = carouselRef.current.innerHTML;
      carouselRef.current.insertAdjacentHTML("beforeend", clonedItems);
    }
  }, []);

  return (
    <div className="overflow-hidden relative">
      <h2 className="text-center font-bold text-3xl mt-12 mb-8">
        Tecnologias<span className="text-brand-primary">.</span>
      </h2>
      <div ref={carouselRef} className="flex gap-6 w-auto animate-slide">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex-none w-20 h-20 flex items-center justify-center"
          >
            <span className="text-5xl opacity-10">{logo.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
