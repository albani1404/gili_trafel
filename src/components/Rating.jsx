import { Star } from 'lucide-react';

export default function Rating({ value }) {
  // Destinasi tanpa rating: jangan tampilkan apa pun (hindari error saat render)
  if (typeof value !== 'number') return null;

  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-text">
      <Star className="h-4 w-4 fill-star text-star" aria-hidden="true" />
      <span>{value.toFixed(1)}</span>
      <span className="sr-only"> out of 5</span>
    </span>
  );
}
