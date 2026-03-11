import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 83;
const FRAME_PREFIX = '/Red_Cup/Red_plastic_cup_rotating_delpmaspu';
const FRAME_SUFFIX = '.png';

/** Build URL for a single frame (zero-padded two digits). */
function getFrameUrl(index: number): string {
  const padded = String(index).padStart(2, '0');
  return `${FRAME_PREFIX}${padded}${FRAME_SUFFIX}`;
}

export type RedCupProps = {
  /** Frames per second for the loop (default 24). */
  fps?: number;
  /** Optional CSS class for the wrapper. */
  className?: string;
  /** Optional inline style for the wrapper. */
  style?: React.CSSProperties;
  /** Whether the overlay allows pointer events (default false so it doesn't block clicks). */
  pointerEvents?: boolean;
};

/**
 * Red Cup module — plays the Red_Cup PNG sequence on loop.
 * Use as an overlay on top of other modules (position absolute, z-index above content).
 */
export function RedCup({
  fps = 24,
  className,
  style,
  pointerEvents = false,
}: RedCupProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const interval = 1000 / fps;

    const tick = (time: number) => {
      const elapsed = time - lastTimeRef.current;
      if (elapsed >= interval) {
        lastTimeRef.current = time;
        frameRef.current = (frameRef.current + 1) % FRAME_COUNT;
        setCurrentFrame(frameRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [fps]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: pointerEvents ? 'auto' : 'none',
        overflow: 'hidden',
        ...style,
      }}
      aria-hidden
    >
      <img
        src={getFrameUrl(currentFrame)}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
