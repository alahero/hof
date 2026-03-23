import { useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FoodSection } from '../sections/FoodSection';
import { PlaylistSection } from '../sections/PlaylistSection';
import { LocationSection } from '../sections/LocationSection';
import { Footer } from '../components/Footer';

/**
 * Página principal HOF — tema claro; hero con video WebM (HOF_PAUTA_YT.webm).
 */
export default function HomePage() {
  // Al entrar desde otra ruta (p. ej. 404), el documento puede seguir scrolleado abajo.
  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);

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
