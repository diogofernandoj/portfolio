import { fadeIn } from "@/animations/variants";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface BenefitItemProps {
  benefit: {
    id: number;
    header: string;
    description: string;
  };
}

const BenefitItem = ({ benefit }: BenefitItemProps) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "all" }}
      exit="hidden"
      className="flex gap-4"
    >
      <span className="bg-primary text-white rounded-full h-max w-max p-2 mt-2">
        <FaCheck size={26} />
      </span>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-2">{benefit.header}</h3>
        <p className="text-muted">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitItem;
