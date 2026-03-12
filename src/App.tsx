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
        <div style={{ position: 'relative' }}>
          <HeroSection />
          {/* 3 Red Cup overlays — posiciones/tamaños responsivos (%, vh, clamp) */}
          <RedCup
            fps={24}
            style={{
              inset: 'auto',
              top: '19vh',
              left: '4.5%',
              width: 'fit-content',
              height: 'clamp(280px, 50vh, 546px)',
              zIndex: 10,
              transform: 'rotate(-25deg)',
            }}
          />
          <RedCup
            fps={24}
            style={{
              inset: 'auto',
              top: '6.5vh',
              right: '10%',
              left: 'auto',
              width: 'clamp(120px, 10.5vw, 203px)',
              height: 'clamp(180px, 30vh, 327px)',
              zIndex: 30,
              transform: 'rotate(34deg)',
              filter: 'blur(5px)',
            }}
          />
          <RedCup
            fps={24}
            style={{
              inset: 'auto',
              top: '30%',
              right: '8%',
              left: 'auto',
              width: 'fit-content',
              height: 'clamp(400px, 72vh, 783px)',
              zIndex: 10,
              transform: 'rotate(18deg)',
            }}
          />
        </div>
        <ExperienceSection />
        <PlaylistSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
