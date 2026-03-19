import { Header } from '../components/Header';
import { HeroSection } from '../sections/HeroSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FoodSection } from '../sections/FoodSection';
import { PlaylistSection } from '../sections/PlaylistSection';
import { LocationSection } from '../sections/LocationSection';
import { Footer } from '../components/Footer';

/**
 * Página principal HOF — secciones modulares.
 * Usada en / y en /redesign como duplicado.
 */
export default function HomePage() {
  return (
    <>
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
    </>
  );
}
