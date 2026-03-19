import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import {
  SECTION_ENTRANCE_VIEWPORT,
  sectionEntranceItemFromBelowVariants,
  sectionEntranceNestedContainerVariants,
} from '../lib/hof-motion';
import { HOF_MENU_URL } from '../lib/hof-nav-links';
import { publicUrl } from '../lib/publicUrl';

const FRAME_COUNT = 148;
const FRAME_BASE = publicUrl('images/Scroll-Animation/ezgif-frame-');

/**
 * Copias en /public/images/hof-food-gallery/ (nombres ASCII) — las rutas con espacios/comas del
 * folder "Instagram Pictures" fallaban en varios navegadores y hosts; los orígenes siguen ahí.
 */
const FOOD_GALLERY_BASE = publicUrl('images/hof-food-gallery/');

const FOOD_GALLERY_LEFT = [
  `${FOOD_GALLERY_BASE}01.jpg`,
  `${FOOD_GALLERY_BASE}02.jpg`,
  `${FOOD_GALLERY_BASE}03.jpg`,
] as const;

const FOOD_GALLERY_RIGHT = [
  `${FOOD_GALLERY_BASE}04.jpg`,
  `${FOOD_GALLERY_BASE}05.jpg`,
  `${FOOD_GALLERY_BASE}06.jpg`,
] as const;

/** Rotaciones (deg) por índice para el abanico; Framer fusiona con translateY de la variante. */
const PHOTO_ROTATE_LEFT = [-7, -14, -4] as const;
const PHOTO_ROTATE_RIGHT = [8, 13, 5] as const;

/** Construye la ruta de un frame por índice (1-based). */
function frameSrc(index: number): string {
  return `${FRAME_BASE}${String(index).padStart(3, '0')}.png`;
}

/**
 * BurgerBurst — animación scrubbed de la hamburguesa irrumpiendo.
 * 300vh de scroll distance, canvas sticky de 100vh.
 * Precarga todos los frames para evitar parpadeo al hacer scrub.
 */
export function BurgerBurst() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const drawnFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* Progreso de scroll → índice de frame (0-based). */
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  /* Titular visible desde el inicio del tramo: entra pronto para que no se pierda con la animación. */
  const headlineOpacity = useTransform(scrollYProgress, [0.06, 0.28], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.06, 0.28], [-24, 0]);

  /* Precarga todos los frames al montar; dibuja el frame 0 en cuanto esté listo. */
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i + 1);

      img.onload = () => {
        images[i] = img;

        /* Inicializa el canvas con las dimensiones del primer frame. */
        if (i === 0) {
          const canvas = canvasRef.current;
          if (!canvas) return;
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          drawnFrameRef.current = 0;
        }
      };

      images[i] = img;
    }

    imagesRef.current = images;
  }, []);

  /* Dibuja el frame correcto en cada cambio de scroll. */
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const idx = Math.min(Math.max(Math.round(latest), 0), FRAME_COUNT - 1);
    if (idx === drawnFrameRef.current) return;

    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /* Sincroniza dimensiones del canvas si cambian entre frames. */
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.drawImage(img, 0, 0);
    drawnFrameRef.current = idx;
  });

  return (
    /* 300vh de distancia de scroll para el scrubbing. */
    <div ref={containerRef} className="hof-food__scroll-container">
      {/* Canvas + titular fijados en viewport mientras se hace scroll. */}
      <div className="hof-food__sticky">
        <motion.div
          className="hof-food__photo-stack hof-food__photo-stack--left"
          aria-hidden
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_ENTRANCE_VIEWPORT}
          variants={sectionEntranceNestedContainerVariants}
        >
          {FOOD_GALLERY_LEFT.map((src, i) => (
            <motion.img
              key={src}
              className={`hof-food__photo-card hof-food__photo-card--left-${i}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              variants={sectionEntranceItemFromBelowVariants}
              style={{ rotate: PHOTO_ROTATE_LEFT[i] }}
              draggable={false}
            />
          ))}
        </motion.div>

        <div className="hof-food__stage">
          <canvas ref={canvasRef} className="hof-food__canvas" />
        </div>

        <motion.div
          className="hof-food__photo-stack hof-food__photo-stack--right"
          aria-hidden
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_ENTRANCE_VIEWPORT}
          variants={sectionEntranceNestedContainerVariants}
        >
          {FOOD_GALLERY_RIGHT.map((src, i) => (
            <motion.img
              key={src}
              className={`hof-food__photo-card hof-food__photo-card--right-${i}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              variants={sectionEntranceItemFromBelowVariants}
              style={{ rotate: PHOTO_ROTATE_RIGHT[i] }}
              draggable={false}
            />
          ))}
        </motion.div>

        <motion.h2
          className="hof-section-title hof-food__headline"
          style={{ opacity: headlineOpacity, y: headlineY }}
        >
          And talk about the food!
        </motion.h2>

        <motion.a
          href={HOF_MENU_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hof-food__menu-cta"
          style={{ left: '50%', x: '-50%', opacity: headlineOpacity }}
          whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          See menu
        </motion.a>
      </div>
    </div>
  );
}
