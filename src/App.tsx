import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";
import BackgroundHome from "./components/BackgroundHome";
import AboutSection from "./about/AboutSection";
import SkillsSection from "./skills/SkillsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <BackgroundHome />
      <BenefitsSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default App;
