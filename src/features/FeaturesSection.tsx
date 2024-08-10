import { fadeIn } from "@/animations/variants";
import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineBusiness } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="relative flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-background"></div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="md:flex-row h-full w-10/12 mx-auto flex flex-col gap-8 py-8 items-center justify-center text-center"
      >
        <div className="flex flex-col gap-2 items-center flex-1">
          <h2 className="bg-white text-primary p-2 rounded-full">
            <FaArrowTrendUp size={35} />
          </h2>
          <p className="font-semibold">
            Aumente suas vendas online com uma página de vendas de alta
            conversão!
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center flex-1">
          <h2 className="bg-white text-primary p-2 rounded-full">
            <MdOutlineBusiness size={35} />
          </h2>
          <p className="font-semibold">
            Traga mais credibilidade à sua empresa com um site personalizado.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center flex-1">
          <h2 className="bg-white text-primary p-2 rounded-full">
            <GrSchedules size={35} />
          </h2>
          <p className="font-semibold">
            Simplifique o agendamento de clientes com sistemas eficientes!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
