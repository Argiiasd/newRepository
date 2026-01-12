import { MobileMenu } from "./components/mobileMenu/MobileMenu";
import { HeroSection } from "./components/heroSection/HeroSection";
import { AboutMeSection } from "./components/aboutMeSection/AboutMeSection";
import { MySkillsSection } from "./components/mySkillSection/MySkillsSection";
import { MyProjectsSection } from "./components/myProjectsSection/MyProjectsSection";
import "./App.css";

function App() {
  return (
    <div>
      <MobileMenu />
      <HeroSection />
      <AboutMeSection />
      <MySkillsSection />
      <MyProjectsSection />
    </div>
  );
}

export default App;
