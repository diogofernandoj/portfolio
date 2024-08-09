import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { fadeIn } from "@/animations/variants";

const AboutSection = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      id="about"
      className="flex justify-center items-center my-12 p-5"
    >
      <div className="lg:flex-row lg:w-[70%] max-w-5xl flex flex-col items-center gap-12 w-[80%]">
        <img
          src="src/assets/images/guy-with-certificate.svg"
          className="w-60"
        />
        <div className="w-full flex flex-col gap-8">
          <h2 className="md:text-4xl text-3xl font-bold">
            Diogo Fernando S. Jorge
          </h2>
          <p className="md:text-xl text-lg font-semibold text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            autem accusamus doloremque minima, esse, soluta aliquid iste
            similique adipisci voluptatem facere optio veniam unde suscipit
            illum. Vel dolorum temporibus suscipit!
          </p>
          <p className="md:text-xl text-lg font-semibold text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            autem accusamus doloremque minima, esse, soluta aliquid iste
            similique adipisci voluptatem facere optio veniam unde suscipit
            illum. Vel dolorum temporibus suscipit!
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkwhats.app/445301"
              target="blank"
              className="border-2 border-solid border-border px-4 py-2 rounded-md flex items-center gap-1 text-sm font-semibold transition hover:bg-border"
            >
              <FaWhatsapp size={20} /> Whatsapp
            </a>
            <a
              href="https://www.instagram.com/diogofernandoj"
              target="blank"
              className="border-2 border-solid border-border px-4 py-2 rounded-md flex items-center gap-1 text-sm font-semibold transition hover:bg-border"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
