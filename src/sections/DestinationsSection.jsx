import { useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import Button from '../components/Button';
import { destinationCategories, getDestinationsByCategory } from '../data/destinations';

export default function DestinationsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = getDestinationsByCategory(activeCategory);

  return (
    <section id="destinations" className="section-y scroll-mt-16" aria-labelledby="destinations-heading">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <h2 id="destinations-heading" className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Destinations
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
            Pantai, pulau, dan garis pantai yang telah kami pilih secara khusus, masing-masing dengan durasi perjalanan, lama menginap, dan kegiatan yang sudah direncanakan.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {destinationCategories.length > 1 ? (
            <div role="group" aria-label="Filter by region" className="flex flex-wrap gap-2">
              {destinationCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${isActive
                      ? 'border-brand bg-brand text-white'
                      : 'border-line bg-white text-muted hover:border-brand hover:text-brand'
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ) : (
            <span />
          )}

          <p className="text-sm text-muted" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'destination' : 'destinations'}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-line bg-white px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-ink">No destinations in this region yet</h3>
            <p className="mt-2 text-muted">Show all destinations to keep browsing.</p>
            <Button variant="secondary" className="mt-6" onClick={() => setActiveCategory('All')}>
              Show all
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
