import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";
import BackgroundHome from "./components/BackgroundHome";
import AboutSection from "./about/AboutSection";
import SkillsSection from "./skills/SkillsSection";
import FeaturesSection from "./features/FeaturesSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <BackgroundHome />
      <FeaturesSection />
      <AboutSection />
      <SkillsSection />
      <BenefitsSection />
    </div>
  );
};

export default App;
