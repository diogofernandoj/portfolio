"use client";

import { fadeIn } from "@/app/_animations/variants";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface FeatureItemProps {
  feature: {
    id: number;
    header: string;
    description: string;
  };
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      exit="hidden"
      className="flex gap-4"
    >
      <span className="bg-primary text-white rounded-full h-max w-max p-2 mt-2">
        <FaCheck size={26} />
      </span>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">{feature.header}</h3>
        <p className="text-muted">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
