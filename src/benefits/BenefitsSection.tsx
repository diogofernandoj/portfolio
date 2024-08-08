import { FaCheck } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const BenefitsSection = () => {
  return (
    <div className="flex flex-col gap-12 mt-12 p-8 lg:p-20 lg:flex-row min-h-screen">
      <div className="flex flex-col gap-4 lg:w-2/5 lg:sticky lg:top-24 h-max mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          veniam?
        </h2>
        <p className="text-brand-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum
          eaque odit delectus repellendus est alias aspernatur vel illum iste.
        </p>
        <a
          href="https://linkwhats.app/445301"
          target="blank"
          className="text-brand-primary font-semibold flex items-center gap-2 transition hover:underline mt-4"
        >
          <span className="bg-brand-primary text-white rounded-full p-2">
            <RiWhatsappFill size={18} />
          </span>{" "}
          Enviar uma mensagem
        </a>
      </div>
      <div className="flex flex-col gap-20 lg:w-3/5 overflow-y-auto">
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-brand-primary text-white rounded-full h-max w-max p-2 mt-2">
            <FaCheck size={18} />
          </span>
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-brand-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              animi suscipit cum, voluptatibus optio id itaque officia
              perspiciatis consequuntur hic earum consequatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
