import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { PlaylistSection } from './sections/PlaylistSection';
import { LocationSection } from './sections/LocationSection';
import { Footer } from './components/Footer';
import { RedCup } from './components/RedCup';

/** Standalone view: only the Red Cup sequence (e.g. ?view=red-cup). */
const isRedCupOnly =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('view') === 'red-cup';

/**
 * HOF homepage — modular sections.
 * Each section lives in src/sections/ for independent edits.
 */
export default function App() {
  if (isRedCupOnly) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#0A0A0A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RedCup
          fps={24}
          style={{
            position: 'relative',
            inset: 'auto',
            width: 'min(80vmin, 400px)',
            height: '80vmin',
            maxHeight: 400,
          }}
        />
      </div>
    );
  }

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
