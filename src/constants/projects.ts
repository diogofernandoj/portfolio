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
    image_url: "src/assets/images/jota-store.png",
    name: "Jota Store",
    category: "E-commerce de periféricos",
    description:
      "E-commerce especializado em periféricos gamers, oferecendo uma vasta seleção de produtos como teclados mecânicos, mouses de alta precisão, headsets imersivos e monitores de alta qualidade. O site é projetado para fornecer uma experiência de compra envolvente, com navegação intuitiva, filtros avançados de busca e um sistema seguro de pagamento. Além disso, os usuários podem encontrar ofertas exclusivas e novidades do mundo gamer, garantindo a melhor escolha para elevar seu setup de jogos ao próximo nível.",
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
      "Dashboard financeiro que permite aos usuários gerenciar suas finanças de forma eficiente. Com ele, é possível acompanhar entradas e saídas de dinheiro, monitorar investimentos e visualizar gráficos que ajudam na tomada de decisões financeiras. A interface intuitiva facilita o controle e a análise das finanças pessoais ou empresariais, tudo em um único lugar.",
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
