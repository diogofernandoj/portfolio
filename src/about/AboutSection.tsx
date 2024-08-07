import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-12 p-5 items-center">
      <h2 className="text-4xl font-bold">
        Quem sou eu <span className="text-brand-primary">?</span>
      </h2>
      <div className="lg:flex-row lg:w-[70%] max-w-5xl flex flex-col items-center gap-12 w-[80%]">
        <img
          src="src/assets/images/guy-with-certificate.svg"
          className="w-60"
        />
        <div className="w-full flex flex-col gap-8">
          <p className="text-xl font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quaerat minima, cumque nam exercitationem, officia dolorem cum
            debitis quidem distinctio a. Ea odit eligendi harum, sapiente
            quaerat aperiam dolorem ratione.
          </p>
          <a
            href="https://linkwhats.app/445301"
            className="bg-brand-primary text-white text-lg font-semibold flex items-center gap-1 px-6 w-max rounded-full py-2 transition shadow-lg hover:bg-white hover:text-brand-primary"
          >
            Contate-me <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
