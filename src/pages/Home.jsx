import { Compass, Headphones, ShieldCheck, BadgeCheck } from 'lucide-react';
import Button from '../components/Button';
import HeroSlider from '../components/HeroSlider';
import DestinationsSection from '../sections/DestinationsSection';
import ContactSection from '../sections/ContactSection';
import { getDestinationById } from '../data/destinations';

const tourDescription =
  'Nusa Gili Express adalah layanan travel spesialis island hopping privat yang mengajak Anda menjelajahi keindahan gili eksotis di Lombok Barat—seperti Gili Nanggu, Sudak, dan Kedis—dengan fasilitas kapal, alat snorkeling, dan antar-jemput yang aman dan nyaman.';

const features = [
  { icon: Compass, title: 'Perjalanan yang disesuaikan dengan kebutuhan', text: 'Rencana perjalanan yang disesuaikan dengan tanggal, kecepatan, dan kelompok Anda.' },
  { icon: Headphones, title: 'Para ahli lokal', text: 'Dukungan khusus dan bimbingan di lapangan, setiap saat.' },
  { icon: ShieldCheck, title: 'Pemesanan mudah', text: 'Proses yang mudah dan aman mulai dari permintaan hingga keberangkatan.' },
  { icon: BadgeCheck, title: 'Harga yang pantas', text: 'Akomodasi dan pengalaman dengan peringkat terbaik dengan harga yang jujur.' },
];

// Hero slides: a handful of featured destinations (1920px wide)
const heroSlides = ['bali', 'maldives', 'raja-ampat', 'komodo']
  .map(getDestinationById)
  .filter(Boolean)
  .map((d) => ({
    id: d.id,
    src: d.heroImage.replace(/w=\d+/, 'w=1920'),
    label: d.name,
    to: `/destinations/${d.id}`,
  }));

export default function Home({ destination, onDestinationChange }) {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative isolate flex min-h-[520px] scroll-mt-16 items-center overflow-hidden bg-ink md:min-h-[640px]"
      >
        <HeroSlider slides={heroSlides} />

        <div className="container-page pb-28 pt-20">
          <div className="animate-rise max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
              Jelajahi Gili Lombok Barat, Secara Privat dan Nyaman
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {tourDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#destinations" variant="light" size="lg">
                Jelajahi Destinasi
              </Button>
              <Button href="#contact" variant="outline-light" size="lg">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-line bg-sand" aria-labelledby="why-heading">
        <h2 id="why-heading" className="sr-only">
          Mengapa bepergian dengan Sea Breeze
        </h2>
        <ul className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <DestinationsSection />
      <ContactSection destination={destination} onDestinationChange={onDestinationChange} />
    </>
  );
}