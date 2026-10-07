import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  BedDouble,
  CalendarDays,
  Check,
  Clock,
  Lightbulb,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import Button from '../components/Button';
import DestinationCard from '../components/DestinationCard';
import MediaSlider from '../components/MediaSlider';
import Rating from '../components/Rating';
import { destinations, getDestinationById, getDestinationMedia } from '../data/destinations';
import { contactDetails } from '../data/navigation';

function NotFound() {
  return (
    <section className="section-y">
      <div className="container-page max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-ink">Destination not found</h1>
        <p className="mt-3 text-muted">
          We could not find that destination. It may have been moved or removed.
        </p>
        <Button href="/#destinations" className="mt-8">
          Browse all destinations
        </Button>
      </div>
    </section>
  );
}

function Fact({ icon: Icon, label, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm font-semibold text-ink">{children}</p>
      </div>
    </li>
  );
}

export default function DestinationDetail({ onEnquire }) {
  const { id } = useParams();
  const destination = getDestinationById(id);
  const media = useMemo(() => (destination ? getDestinationMedia(destination) : []), [destination]);

  useEffect(() => {
    if (!destination) return;
    const previous = document.title;
    document.title = `${destination.name}, ${destination.country} — Nusa Gili Express`;
    return () => {
      document.title = previous;
    };
  }, [destination]);

  if (!destination) return <NotFound />;

  const {
    name,
    badge,
    rating,
    duration,
    accommodation,
    activities,
    location,
    description,
    highlights,
    bestTimeToVisit,
    travelTips,
    category,
  } = destination;

  // Same region first, then anything else
  const related = destinations
    .filter((d) => d.id !== destination.id)
    .sort((a, b) => Number(b.category === category) - Number(a.category === category))
    .slice(0, 3);

  const whatsappLink = `${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Halo Nusa Gili Express, saya ingin tahu lebih lanjut tentang trip ke ${name}.`,
  )}`;

  return (
    <article className="pb-16 pt-6 md:pb-24 md:pt-8">
      <div className="container-page">
        <Link
          to="/#destinations"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All destinations
        </Link>

        <header className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            {badge && (
              <span className="inline-block rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink">
                {badge}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">{name}</h1>
            <p className="mt-1 flex items-center gap-1.5 text-muted">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {location}
            </p>
          </div>
          <Rating value={rating} />
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main column */}
          <div className="min-w-0 lg:col-span-8">
            <MediaSlider items={media} label={`${name} photos and videos`} />

            <section className="mt-10" aria-labelledby="about-heading">
              <h2 id="about-heading" className="text-xl font-bold text-ink">
                About {name}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{description}</p>
            </section>

            <section className="mt-10" aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="text-xl font-bold text-ink">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-line p-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 rounded-xl bg-brand-soft p-6" aria-labelledby="tips-heading">
              <h2 id="tips-heading" className="flex items-center gap-2 text-xl font-bold text-ink">
                <Lightbulb className="h-5 w-5 text-accent" aria-hidden="true" />
                Travel tips
              </h2>
              <p className="mt-2 text-sm text-muted">
                Best time to visit: <span className="font-semibold text-ink">{bestTimeToVisit}</span>
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {travelTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Booking card */}
          <aside className="lg:col-span-4" aria-label="Trip summary">
            <div className="rounded-xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
              <ul className="flex flex-col gap-4">
                <Fact icon={Clock} label="Duration">
                  {duration}
                </Fact>
                <Fact icon={BedDouble} label="Accommodation">
                  {accommodation}
                </Fact>
                <Fact icon={CalendarDays} label="Best time to visit">
                  {bestTimeToVisit}
                </Fact>
              </ul>

              <div className="mt-6 border-t border-line pt-6">
                <p className="text-xs text-muted">Activities</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {activities.map((activity) => (
                    <li
                      key={activity}
                      className="rounded-md bg-sand px-2.5 py-1 text-xs font-semibold text-text"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button onClick={() => onEnquire(destination.id)} icon={Send} size="lg" className="w-full">
                  Enquire about this trip
                </Button>
                <Button href={whatsappLink} variant="secondary" icon={MessageCircle} className="w-full">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section className="mt-16 border-t border-line pt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-ink">
            You might also like
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <DestinationCard key={item.id} destination={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
