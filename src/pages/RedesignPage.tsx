import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FoodSection } from '../sections/FoodSection';
import { PlaylistSection } from '../sections/PlaylistSection';
import { LocationSection } from '../sections/LocationSection';
import { Footer } from '../components/Footer';

/**
 * Página de rediseño: misma estructura que la homepage pero en tema claro (light mode).
 * Envuelta en .hof-theme-light para aplicar variables y overrides de CSS.
 */
export default function RedesignPage() {
  return (
    <div className="hof-theme-light">
      <Header />
      <main>
        <div className="hof-hero-experience-wrap">
          <HeroSection />
          <ExperienceSection />
        </div>
        <FoodSection />
        <PlaylistSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
