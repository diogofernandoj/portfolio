import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";

const App = () => {
  return (
    <div className="text-white">
      <Navbar />
      <HomeSection />
      <BenefitsSection />
    </div>
  );
};

export default App;
