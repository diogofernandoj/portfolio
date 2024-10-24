"use client";

import { IconType } from "react-icons";

interface ProjectItemProps {
  project: {
    id: number;
    image_url: string;
    name: string;
    category: string;
    description: string;
    techs: IconType[];
    repository_link: string;
    deploy_link: string;
  };
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className="flex lg:flex-row flex-col gap-12 px-4">
      <img
        src={project.image_url}
        alt={project.name}
        className="rounded-xl lg:w-1/2"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl">{project.name}</h2>
        <small className="text-base font-semibold">{project.category}</small>
        <p className="text-muted mt-4 text-lg">{project.description}</p>
        <div className="flex items-center gap-4 my-6">
          <a
            target="blank"
            href={project.deploy_link}
            className="bg-primary/20 text-primary text-sm font-semibold px-2 py-1 rounded-full transition shadow-md hover:shadow-primary/30"
          >
            Acessar projeto
          </a>
          <a
            target="blank"
            href={project.repository_link}
            className="bg-primary/20 text-primary text-sm font-semibold px-2 py-1 rounded-full transition shadow-md hover:shadow-primary/30"
          >
            Acessar repositório
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Tecnologias utilizadas:</h3>
          <div className="flex items-center gap-4 text-2xl">
            {project.techs.map((TechIcon, index) => (
              <TechIcon key={index} className="text-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
