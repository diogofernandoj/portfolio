import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center my-12 p-5">
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
              className="w-max px-4 py-2 rounded-full bg-border flex items-center gap-2 font-semibold hover:opacity-75"
            >
              <FaWhatsapp size={20} /> Whatsapp
            </a>
            <a
              href="https://www.instagram.com/diogofernandoj"
              target="blank"
              className="w-max px-4 py-2 rounded-full bg-border flex items-center gap-2 font-semibold hover:opacity-75"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
