import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Links from "./components/Links";

const HomeSection = () => {
  return (
    <div className="w-[90%] md:w-[60%] lg:w-[50%] h-screen mx-auto pt-20 flex flex-col gap-4 justify-center items-center text-center">
      <h2 className="font-bold text-xl md:text-3xl lg:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus at hic
        dolorem?
      </h2>
      <p className="text-gray-400 text-sm md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui est
        odio id quisquam eveniet.
      </p>
      <Links />
      <a
        href="#benefits"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full font-semibold shadow-lg shadow-cyan-500/50 transition hover:shadow-blue-500/50"
      >
        Saiba mais
      </a>
      <a href="#benefits" className="absolute bottom-0 animate-bounce">
        <MdKeyboardDoubleArrowDown size={36} />
      </a>
    </div>
  );
};

export default HomeSection;
