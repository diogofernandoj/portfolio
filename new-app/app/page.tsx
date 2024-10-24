import AboutSection from "./_components/about-section";
import Cards from "./_components/cards";
import FeaturesSection from "./_components/features-section";
import Header from "./_components/header";
import HomeSection from "./_components/home-section";
import ProjectsSection from "./_components/projects-section";
import Skills from "./_components/skills";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <HomeSection />
      <Cards />
      <FeaturesSection />
      <Skills />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
};

export default App;
