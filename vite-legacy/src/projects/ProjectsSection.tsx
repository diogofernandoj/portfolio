import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectItem from "./components/ProjectItem";
import { PROJECTS } from "../constants/projects";
import { fadeIn } from "@/animations/variants";

const ProjectsSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: true }}
      id="projects"
      className="pt-20"
    >
      <div className="flex flex-col gap-12 md:hidden">
        {PROJECTS.map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
      </div>
      <Carousel
        className="mt-20 lg:w-[90%] w-[80%] mx-auto hidden md:block"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {PROJECTS.map((item) => (
            <CarouselItem key={item.id}>
              <ProjectItem project={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default ProjectsSection;
