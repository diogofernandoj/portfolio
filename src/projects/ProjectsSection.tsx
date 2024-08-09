import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectItem from "./components/ProjectItem";
import { PROJECTS } from "./constants/projects";

const ProjectsSection = () => {
  return (
    <div id="projects">
      <div className="flex flex-col mt-12 gap-12 md:hidden">
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
    </div>
  );
};

export default ProjectsSection;
