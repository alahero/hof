import { motion } from 'framer-motion';
import { CTAButton } from '../components/CTAButton';
import { VerticalCutReveal } from '../components/ui/vertical-cut-reveal';
import { HOF_MANDALA_TICKETS_URL } from '../lib/hof-nav-links';
import { publicUrl } from '../lib/publicUrl';

/** Opciones de hero alineadas a rutas /hero-option-N. */
export type HeroOption = 1 | 2 | 3 | 4;

/** Fondo por defecto: JPEG en public/images. */
const HERO_IMAGE_DEFAULT = publicUrl('images/hero-background.jpg');

/** Fondo Hero Option 2 — disco bear / club (carpeta con espacio en nombre). */
const HERO_IMAGE_OPTION_2 = encodeURI(
  publicUrl('images/Hero Options/643037297_18224088004308115_6065534450988818752_n.jpg'),
);

/**
 * Hero Option 3 — WebM ligero (VP9, 1280px, 24 fps, sin audio).
 * Regenerar si cambias el MP4: ffmpeg -y -i HOF_PAUTA_YT_MARZO.mp4 -an -vf "scale=1280:-2,fps=24" -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 HOF_PAUTA_YT_MARZO.webm
 */
const HERO_VIDEO_OPTION_3 = encodeURI(
  publicUrl('images/Hero Options/HOF_PAUTA_YT_MARZO.webm'),
);

/**
 * Hero Option 4 — WebM ligero (mismos parámetros que Option 3).
 * Regenerar: ffmpeg -y -i HOF_PAUTA_YT.mp4 -an -vf "scale=1280:-2,fps=24" -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 HOF_PAUTA_YT.webm
 */
const HERO_VIDEO_OPTION_4 = encodeURI(publicUrl('images/Hero Options/HOF_PAUTA_YT.webm'));

/** Cuando termina el contenido del hero (CTA: delay 1.05 + duration 0.4 ≈ 1.45s). La imagen escala 120% → 100% a partir de este delay. */
const HERO_BG_SCALE_DELAY = 1.5;

const CONTENT_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

type HeroSectionProps = {
  /** 2 = imagen alterna y sin edge fade; 3 y 4 = video WebM, sin texto visible ni CTA (solo degradado inferior). */
  heroOption?: HeroOption;
};

/**
 * Hero section module — HOF homepage.
 * Fondo: empieza a 120% scale; al terminar las animaciones del contenido, escala a 100%.
 */
export function HeroSection({ heroOption = 1 }: HeroSectionProps) {
  const isOption2 = heroOption === 2;
  const isVideoHero = heroOption === 3 || heroOption === 4;
  const useVideoBg = isVideoHero;

  const heroImage = isOption2 ? HERO_IMAGE_OPTION_2 : HERO_IMAGE_DEFAULT;
  const videoSrc = heroOption === 3 ? HERO_VIDEO_OPTION_3 : heroOption === 4 ? HERO_VIDEO_OPTION_4 : null;

  const rootClass = [
    'hof-hero',
    isOption2 ? 'hof-hero--option-2' : '',
    heroOption === 3 ? 'hof-hero--option-3' : '',
    heroOption === 4 ? 'hof-hero--option-4' : '',

  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={rootClass} aria-label="Hero">
      {useVideoBg && videoSrc ? (
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
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        </motion.div>
      ) : (
        <motion.div
          className="hof-hero__bg"
          aria-hidden="true"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            delay: HERO_BG_SCALE_DELAY,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
      )}
      {/* Velado claro sobre la foto o el video. */}
      <div className="hof-hero__light-filter" aria-hidden="true" />
      {/* Degradados — omitidos en Option 2; en 3 y 4 solo degradado inferior (sin banda superior). */}
      {!isOption2 ? (
        <div
          className={isVideoHero ? 'hof-hero__edge-fade hof-hero__edge-fade--bottom-only' : 'hof-hero__edge-fade'}
          aria-hidden="true"
        />
      ) : null}
      <motion.div
        className="hof-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: CONTENT_EASE }}
      >
        {isVideoHero ? (
          <h1 className="hof-sr-only">
            House of Fiesta — Rush the night. Break the rules. Cancún · One tribe.
          </h1>
        ) : (
          <>
            <motion.span
              className="hof-hero__label"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.75,
                ease: CONTENT_EASE,
              }}
            >
              House of Fiesta
            </motion.span>
            <h1 className="hof-hero__title" aria-label="Rush the night. Break the rules.">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{ type: 'spring', stiffness: 200, damping: 21 }}
                containerClassName="hof-hero__title-line"
                autoStart
              >
                Rush the night.
              </VerticalCutReveal>
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.03}
                staggerFrom="first"
                transition={{ type: 'spring', stiffness: 200, damping: 21, delay: 0.25 }}
                containerClassName="hof-hero__title-line"
                autoStart
              >
                Break the rules.
              </VerticalCutReveal>
            </h1>
            <motion.p
              className="hof-hero__subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9,
                ease: CONTENT_EASE,
              }}
            >
              Cancún · One tribe
            </motion.p>
          </>
        )}
        {!isVideoHero ? (
          <motion.div
            className="hof-hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 1.05,
              ease: CONTENT_EASE,
            }}
          >
            <CTAButton primary href={HOF_MANDALA_TICKETS_URL}>
              Get in
            </CTAButton>
          </motion.div>
        ) : null}
      </motion.div>
    </header>
  );
}
