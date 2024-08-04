const BenefitsSection = () => {
  return (
    <div
      id="benefits"
      className="relative flex justify-center items-center min-h-64 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-brand-background"></div>
      <div className="md:flex-row h-full w-10/12 mx-auto flex flex-col gap-8 py-8 items-center justify-center text-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Lorem.</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            accusamus earum nostrum illum et unde atque!
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Lorem.</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            accusamus earum nostrum illum et unde atque!
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Lorem.</h2>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            accusamus earum nostrum illum et unde atque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
