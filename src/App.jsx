import { MobileMenu } from "./components/mobileMenu/MobileMenu";
import { HeroSection } from "./components/heroSection/HeroSection";
import { AboutMeSection } from "./components/aboutMeSection/AboutMeSection";
import { MySkillsSection } from "./components/mySkillSection/MySkillsSection";
import "./App.css";

function App() {
  return (
    <div>
      <MobileMenu />
      <HeroSection />
      <AboutMeSection />
      <MySkillsSection />
    </div>
  );
}

export default App;
