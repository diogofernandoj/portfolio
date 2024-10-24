"use client";

import { RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/_animations/variants";
import { FEATURES } from "../_constants/features";
import FeatureItem from "./feature-item";

const FeaturesSection = () => {
  return (
    <div
      id="benefits"
      className="flex flex-col gap-12 lg:gap-28 mt-12 p-8 lg:p-20 lg:flex-row min-h-screen"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        exit="hidden"
        className="flex flex-col gap-4 lg:w-2/5 lg:sticky lg:top-24 h-max mb-10"
      >
        <h2 className="text-3xl font-bold mb-2">
          Quer saber como a tecnologia pode transformar o seu negócio?
        </h2>
        <p className="text-muted">
          Sua empresa pode estar perdendo dinheiro por não ter uma boa presença
          digital, entenda o que um site profissional é capaz de fazer por você.
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
        {FEATURES.map((item) => (
          <FeatureItem key={item.id} feature={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
