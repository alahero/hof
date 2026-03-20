import { useLayoutEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSection, type HeroOption } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FoodSection } from '../sections/FoodSection';
import { PlaylistSection } from '../sections/PlaylistSection';
import { LocationSection } from '../sections/LocationSection';
import { Footer } from '../components/Footer';

export type HomePageProps = {
  heroOption?: HeroOption;
};

/**
 * Página principal HOF — mismo layout que el rediseño (tema claro).
 * /hero-option-2: imagen alterna, sin edge fade.
 * /hero-option-3 y /hero-option-4: video WebM de fondo, sin CTA ni tipografía visible (ver HeroSection).
 */
export default function HomePage({ heroOption = 1 }: HomePageProps) {
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
          <HeroSection heroOption={heroOption} />
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
