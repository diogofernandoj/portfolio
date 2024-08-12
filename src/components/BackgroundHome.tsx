const BackgroundHome = () => {
  return (
    <div className="lg:h-40 relative h-28 z-[-1]">
      <div
        className="
       max-w-7xl lg:w-[calc(100%-8rem)] md:w-[calc(100%-4rem)] absolute top-0 left-0 right-0 mx-auto w-[calc(100%-2rem)] h-full opacity-20"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default BackgroundHome;
