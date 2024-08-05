import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";
import BackgroundHome from "./components/BackgroundHome";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <HomeSection />
      <BackgroundHome />
      <BenefitsSection />
    </div>
  );
};

export default App;
