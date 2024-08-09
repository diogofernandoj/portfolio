import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { BENEFITS } from "@/constants/benefits";
import BenefitItem from "./components/BenefitItem";

const BenefitsSection = () => {
  return (
    <div
      id="benefits"
      className="flex flex-col gap-12 mt-12 p-8 lg:p-20 lg:flex-row min-h-screen"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="flex flex-col gap-4 lg:w-2/5 lg:sticky lg:top-24 h-max mb-10"
      >
        <h2 className="text-3xl font-bold mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          veniam?
        </h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum
          eaque odit delectus repellendus est alias aspernatur vel illum iste.
        </p>
        <a
          href="https://linkwhats.app/445301"
          target="blank"
          className="text-primary font-semibold flex items-center gap-2 transition hover:underline mt-4"
        >
          <span className="bg-primary text-white rounded-full p-2">
            <RiWhatsappFill size={18} />
          </span>{" "}
          Enviar uma mensagem
        </a>
      </motion.div>

      <div className="flex flex-col gap-12 lg:w-3/5">
        {BENEFITS.map((item) => (
          <BenefitItem key={item.id} benefit={item} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
