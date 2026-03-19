import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FoodSection } from '../sections/FoodSection';
import { PlaylistSection } from '../sections/PlaylistSection';
import { LocationSection } from '../sections/LocationSection';
import { Footer } from '../components/Footer';

/**
 * Página principal HOF — mismo layout que el rediseño (tema claro).
 * Ruta /; /redesign reutiliza este componente.
 */
export default function HomePage() {
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
