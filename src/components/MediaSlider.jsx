import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, VideoOff } from 'lucide-react';
import SmartImage from './SmartImage';

const SWIPE_THRESHOLD = 50;

function VideoSlide({ item }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative h-full w-full bg-ink">
        <img src={item.poster} alt="" className="h-full w-full object-cover opacity-40" />
        <p className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sm font-medium text-white">
          <VideoOff className="h-6 w-6" aria-hidden="true" />
          Video is unavailable right now
        </p>
      </div>
    );
  }

  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={item.poster}
      aria-label={item.alt}
      onError={() => setFailed(true)}
      className="h-full w-full bg-black object-contain"
    >
      <source src={item.src} type="video/mp4" />
    </video>
  );
}

function YouTubeSlide({ item }) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${item.id}?rel=0`}
      title={item.alt}
      loading="lazy"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      className="h-full w-full border-0 bg-black"
    />
  );
}

function Slide({ item }) {
  if (item.type === 'video') return <VideoSlide item={item} />;
  if (item.type === 'youtube') return <YouTubeSlide item={item} />;
  return <SmartImage src={item.src} alt={item.alt} loading="eager" className="h-full w-full object-cover" />;
}

/**
 * Image / video slider.
 * - Prev/next buttons, thumbnails, swipe on touch, and ← → keys.
 * - Only the active slide is mounted, so a video stops when you move away from it.
 * `items`: [{ type: 'image' | 'video' | 'youtube', src, thumb, alt, poster?, id? }]
 */
export default function MediaSlider({ items, label = 'Gallery' }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const thumbRefs = useRef([]);

  const count = items.length;
  const safeIndex = Math.min(index, count - 1);
  const current = items[safeIndex];

  const go = (next) => setIndex((next + count) % count);

  // Keep the active thumbnail in view
  useEffect(() => {
    thumbRefs.current[safeIndex]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [safeIndex]);

  // Preload the neighbouring photos so next/prev feels instant
  useEffect(() => {
    [safeIndex + 1, safeIndex - 1].forEach((i) => {
      const item = items[(i + count) % count];
      if (item?.type === 'image') new Image().src = item.src;
    });
  }, [safeIndex, items, count]);

  if (count === 0) return null;

  const onKeyDown = (e) => {
    // Let video / iframe controls keep their own arrow-key behaviour
    if (e.target.closest('video, iframe')) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(safeIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(safeIndex + 1);
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(safeIndex + (delta < 0 ? 1 : -1));
  };

  const arrow =
    'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white focus-visible:outline-offset-0 md:h-11 md:w-11';

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="select-none"
    >
      {/* Stage */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface sm:aspect-[16/10]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={safeIndex}
          role="group"
          aria-roledescription="slide"
          aria-label={`${safeIndex + 1} of ${count}`}
          className="animate-fade h-full w-full"
        >
          <Slide item={current} />
        </div>

        {count > 1 && (
          <>
            <button type="button" onClick={() => go(safeIndex - 1)} className={`${arrow} left-3`} aria-label="Previous slide">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(safeIndex + 1)} className={`${arrow} right-3`} aria-label="Next slide">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}

        <span
          className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-ink/75 px-2.5 py-1 text-xs font-semibold text-white"
          aria-hidden="true"
        >
          {safeIndex + 1} / {count}
        </span>

        {current.type !== 'image' && (
          <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-ink/75 px-2.5 py-1 text-xs font-semibold text-white">
            <Play className="h-3 w-3 fill-current" aria-hidden="true" />
            Video
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`${label} thumbnails`}>
          {items.map((item, i) => {
            const isActive = i === safeIndex;
            return (
              <li key={`${item.src ?? item.id}-${i}`} className="shrink-0">
                <button
                  type="button"
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}${item.type !== 'image' ? ' (video)' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block h-14 w-20 cursor-pointer overflow-hidden rounded-lg border-2 bg-surface transition sm:h-16 sm:w-24 ${
                    isActive ? 'border-brand' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <SmartImage src={item.thumb} alt="" className="h-full w-full object-cover" />
                  {item.type !== 'image' && (
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/35">
                      <Play className="h-5 w-5 fill-white text-white" aria-hidden="true" />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
