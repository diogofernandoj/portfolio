import Cards from "./_components/cards";
import FeaturesSection from "./_components/features-section";
import Header from "./_components/header";
import HomeSection from "./_components/home-section";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <HomeSection />
      <Cards />
      <FeaturesSection />
    </div>
  );
};

export default App;
