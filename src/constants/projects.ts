import { FaReact, FaStripe, FaDocker, FaNodeJs } from "react-icons/fa";
import {
  SiGithubactions,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSwagger,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

export const PROJECTS = [
  {
    id: 1,
    image_url: "src/assets/images/find-trips.png",
    name: "Find Trips",
    category: "Sistema de reserva de viagens",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, porro illo perferendis earum eos iste odit tempore, omnis deserunt nam commodi at, enim consequuntur aliquam quae facilis impedit. Voluptate, ex.",
    techs: [
      FaReact,
      SiNextdotjs,
      BiLogoTypescript,
      BiLogoTailwindCss,
      SiPostgresql,
      SiPrisma,
    ],
    repository_link: "https://www.github.com/diogofernandoj/fsw-trips",
    deploy_link: "https://dj-fsw-trips.vercel.app",
  },
  {
    id: 2,
    image_url: "src/assets/images/jota-store.png",
    name: "Jota Store",
    category: "Ecommerce de periféricos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, porro illo perferendis earum eos iste odit tempore, omnis deserunt nam commodi at, enim consequuntur aliquam quae facilis impedit. Voluptate, ex.",
    techs: [
      FaReact,
      SiNextdotjs,
      BiLogoTypescript,
      BiLogoTailwindCss,
      SiPostgresql,
      SiPrisma,
      FaStripe,
    ],
    repository_link: "https://www.github.com/diogofernandoj/fsw-store",
    deploy_link: "https://dj-fsw-store.vercel.app",
  },
  {
    id: 3,
    image_url: "src/assets/images/fin-track.png",
    name: "Fin Track (Backend)",
    category: "API para gerenciamento de finanças",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, porro illo perferendis earum eos iste odit tempore, omnis deserunt nam commodi at, enim consequuntur aliquam quae facilis impedit. Voluptate, ex.",
    techs: [
      FaNodeJs,
      SiPostgresql,
      SiPrisma,
      FaDocker,
      SiJest,
      SiSwagger,
      SiGithubactions,
    ],
    repository_link: "https://github.com/diogofernandoj/finance-app-api",
    deploy_link: "https://finance-app-api-uy0a.onrender.com/docs/",
  },
];
