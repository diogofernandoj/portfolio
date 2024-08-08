import { FaWhatsapp } from "react-icons/fa";

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
          <p className="md:text-xl text-lg font-semibold text-brand-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            autem accusamus doloremque minima, esse, soluta aliquid iste
            similique adipisci voluptatem facere optio veniam unde suscipit
            illum. Vel dolorum temporibus suscipit!
          </p>
          <p className="md:text-xl text-lg font-semibold text-brand-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            autem accusamus doloremque minima, esse, soluta aliquid iste
            similique adipisci voluptatem facere optio veniam unde suscipit
            illum. Vel dolorum temporibus suscipit!
          </p>
          <a
            href="https://linkwhats.app/445301"
            target="blank"
            className="w-max px-4 py-2 rounded-full bg-brand-border flex items-center gap-2 font-bold hover:opacity-75"
          >
            Contate-me <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
