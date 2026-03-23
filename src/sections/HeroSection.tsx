import { motion } from 'framer-motion';
import { publicUrl } from '../lib/publicUrl';

/**
 * WebM de fondo (VP9, 1280px, 24 fps, sin audio).
 * Regenerar: ffmpeg -y -i HOF_PAUTA_YT.mp4 -an -vf "scale=1280:-2,fps=24" -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 HOF_PAUTA_YT.webm
 */
const HERO_VIDEO_WEBM = encodeURI(publicUrl('images/Hero Options/HOF_PAUTA_YT.webm'));

/** Retraso antes de que el fondo escale de 120% a 100% (alineado al ritmo del contenido oculto). */
const HERO_BG_SCALE_DELAY = 1.5;

const CONTENT_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/**
 * Hero de la homepage — video a pantalla completa, velado ligero, sin CTA visible ni degradados de borde.
 * El h1 queda solo para lectores de pantalla / SEO.
 */
export function HeroSection() {
  return (
    <header className="hof-hero hof-hero--option-4" aria-label="Hero">
      <motion.div
        className="hof-hero__bg hof-hero__bg--video"
        aria-hidden="true"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: HERO_BG_SCALE_DELAY,
          ease: 'easeInOut',
        }}
      >
        {/* muted + playsInline: autoplay en móviles; loop para fondo continuo */}
        <video
          className="hof-hero__video"
          src={HERO_VIDEO_WEBM}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
      </motion.div>
      <div className="hof-hero__light-filter" aria-hidden="true" />
      <motion.div
        className="hof-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: CONTENT_EASE }}
      >
        <h1 className="hof-sr-only">
          House of Fiesta — Rush the night. Break the rules. Cancún · One tribe.
        </h1>
      </motion.div>
    </header>
  );
}
