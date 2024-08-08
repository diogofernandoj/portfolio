import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-border p-4">
      <p className="flex items-center justify-center text-muted text-sm font-medium">
        <FaRegCopyright />
        2024 Diogo Jorge. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
