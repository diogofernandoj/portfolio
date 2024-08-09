import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex-grow border-t-2 border-muted w-12"></div>
      <div className="flex items-center gap-2 px-2">
        <a href="https://www.linkedin.com/in/diogofernandoj/" target="blank">
          <FaLinkedin
            size={28}
            className="text-muted transition hover:text-white hover:-translate-y-1"
          />
        </a>
        <a href="https://github.com/diogofernandoj" target="blank">
          <FaGithub
            size={28}
            className="text-muted transition hover:text-white hover:-translate-y-1"
          />
        </a>
        <a href="https://linkwhats.app/445301" target="blank">
          <FaWhatsapp
            size={28}
            className="text-muted transition hover:text-white hover:-translate-y-1"
          />
        </a>
      </div>
      <div className="flex-grow border-t-2 border-muted w-12"></div>
    </div>
  );
};

export default Links;
