import HomeSection from "./home/HomeSection";
import Navbar from "./components/Navbar";
import BenefitsSection from "./benefits/BenefitsSection";
import AboutSection from "./about/AboutSection";
import SkillsSection from "./skills/SkillsSection";
import FeaturesSection from "./features/FeaturesSection";
import Footer from "./components/Footer";
import ProjectsSection from "./projects/ProjectsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <FeaturesSection />
      <BenefitsSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
