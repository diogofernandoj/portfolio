import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";
import BackgroundHome from "./components/BackgroundHome";
import AboutSection from "./about/AboutSection";
import SkillsSection from "./skills/SkillsSection";
import FeaturesSection from "./features/FeaturesSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <BackgroundHome />
      <FeaturesSection />
      <BenefitsSection />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
