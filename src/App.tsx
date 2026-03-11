import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { PlaylistSection } from './sections/PlaylistSection';
import { LocationSection } from './sections/LocationSection';
import { Footer } from './components/Footer';

/**
 * HOF homepage — modular sections.
 * Each section lives in src/sections/ for independent edits.
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <PlaylistSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
