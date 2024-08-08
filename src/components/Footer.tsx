import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-brand-border p-4">
      <p className="flex items-center justify-center text-brand-text text-sm font-medium">
        <FaRegCopyright />
        2024 Diogo Jorge. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
