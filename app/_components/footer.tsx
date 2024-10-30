import { FaRegCopyright } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-border flex flex-col">
      <div className="flex justify-between flex-wrap mx-auto gap-8 p-8 w-full max-w-3xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-semibold text-2xl">Menu</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-lg">
              <a
                href="#"
                className="text-muted transition ease-in hover:text-white"
              >
                Início
              </a>
            </li>
            <li className="text-lg">
              <a
                href="#benefits"
                className="text-muted transition ease-in hover:text-white"
              >
                Saiba mais
              </a>
            </li>
            <li className="text-lg">
              <a
                href="#projects"
                className="text-muted transition ease-in hover:text-white"
              >
                Projetos
              </a>
            </li>
            <li className="text-lg">
              <a
                href="#about"
                className="text-muted transition ease-in hover:text-white"
              >
                Sobre mim
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-semibold text-2xl">Redes sociais</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-lg">
              <a
                href="https://www.linkedin.com/in/diogofernandoj"
                target="blank"
                className="text-muted transition ease-in hover:text-white"
              >
                Linkedin
              </a>
            </li>
            <li className="text-lg">
              <a
                href="https://www.instagram.com/diogofernandoj"
                target="blank"
                className="text-muted transition ease-in hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li className="text-lg">
              <a
                href="https://wa.link/6roemu"
                target="blank"
                className="text-muted transition ease-in hover:text-white"
              >
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 items-start w-full md:w-auto">
          <div className="flex justify-center items-center gap-2">
            <span className="bg-white text-black p-2 rounded-full">
              <MdPhone size={30} />
            </span>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-semibold">Atendimento</span>
              <span className="text-muted">+55 (16) 997459170</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className="bg-white text-black p-2 rounded-full">
              <MdMail size={30} />
            </span>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-semibold">Contato</span>
              <span className="text-muted">diogofernandoj@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center text-muted text-sm font-medium p-4">
        <FaRegCopyright />
        2024 Diogo Jorge. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
