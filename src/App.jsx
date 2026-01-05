import { MobileMenu } from "./components/mobileMenu/MobileMenu";
import { HeroSection } from "./components/heroSection/HeroSection";
import { AboutMeSection } from "./components/aboutMeSection/AboutMeSection";
import "./App.css";

function App() {
  return (
    <div>
      <MobileMenu />
      <HeroSection />
      <AboutMeSection />
    </div>
  );
}

export default App;
