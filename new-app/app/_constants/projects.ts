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
    image_url: "/images/find-trips.png",
    name: "Find Trips",
    category: "Sistema de reserva de hospedagens",
    description:
      "Este projeto é um sistema de reservas online para hospedagens, oferecendo aos usuários uma plataforma intuitiva para encontrar e reservar acomodações em diversos destinos, como hotéis, fazendas, pousadas, e muito mais. Com um catálogo organizado, os usuários podem facilmente selecionar seu destino e realizar sua reserva de maneira rápida e segura.",
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
    image_url: "/images/jota-store.png",
    name: "Jota Store",
    category: "E-commerce de periféricos",
    description:
      "E-commerce especializado em periféricos gamers, com produtos como teclados, mouses, headsets e monitores. O site oferece navegação intuitiva, filtros avançados, pagamento seguro e promoções exclusivas para otimizar setups de jogos.",
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
    image_url: "/images/fin-track.png",
    name: "Fin Track (Backend)",
    category: "API para gerenciamento de finanças",
    description:
      "Dashboard financeiro que facilita o gerenciamento de finanças, permitindo acompanhar entradas e saídas, monitorar investimentos e visualizar gráficos para apoiar decisões. A interface intuitiva centraliza o controle financeiro pessoal ou empresarial.",
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
