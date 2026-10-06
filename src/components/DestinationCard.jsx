import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import Rating from './Rating';
import SmartImage from './SmartImage';

export default function DestinationCard({ destination }) {
  const { id, name, country, badge, rating, duration, activities, startingPrice, image } =
    destination;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <SmartImage
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-ink">{name}</h3>
          <Rating value={rating} />
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          {country}
        </p>

        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
          <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
          {duration}
        </p>

        <p className="mt-1 text-sm text-muted">{activities.slice(0, 3).join(', ')}</p>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between border-t border-line pt-4">
            <div>
              <p className="text-xs text-muted">From</p>
              <p className="text-xl font-bold text-ink">${startingPrice.toLocaleString('en-US')}</p>
            </div>
            {/* Stretched link: the whole card is clickable, one tab stop per card */}
            <Link
              to={`/destinations/${id}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand after:absolute after:inset-0 after:content-[''] group-hover:text-brand-dark"
            >
              View details<span className="sr-only"> for {name}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
