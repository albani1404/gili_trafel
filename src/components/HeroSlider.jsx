import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const INTERVAL = 3000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Full-bleed background slider for the hero (slide animation, autoplay).
 * Must sit inside a `relative isolate` parent. Renders the images behind the
 * content (-z-10) and the controls above it (z-10).
 * `slides`: [{ id, src, label, to }]
 */
export default function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovering, setHovering] = useState(false);

  const count = slides.length;
  const go = (next) => setIndex((next + count) % count);

  // Advance every INTERVAL ms; restarts whenever the slide changes (manual or auto)
  useEffect(() => {
    if (!playing || hovering || count < 2) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(timer);
  }, [index, playing, hovering, count]);

  const current = slides[index];

  const control =
    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/15';

  return (
    <>
      {/* Sliding track */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.src}
              alt=""
              fetchPriority={i === 0 ? 'high' : 'auto'}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10" aria-hidden="true" />

      {/* Controls */}
      {count > 1 && (
        <div
          className="container-page absolute inset-x-0 bottom-6 z-10 flex flex-wrap items-center justify-between gap-4"
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured destinations"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
        >
          <Link
            to={current.to}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <span className="text-white/60">Now showing</span>
            {current.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {slides.map((slide, i) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${slide.label}`}
                    aria-current={i === index ? 'true' : undefined}
                    className={`block h-2 cursor-pointer rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                  />
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button type="button" onClick={() => go(index - 1)} className={control} aria-label="Previous slide">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(index + 1)} className={control} aria-label="Next slide">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className={control}
                aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              >
                {playing ? (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
