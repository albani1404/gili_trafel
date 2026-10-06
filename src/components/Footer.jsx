import { Link } from 'react-router-dom';
import { Anchor, Mail, Phone } from 'lucide-react';
import { navLinks, contactDetails } from '../data/navigation';

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <Link to="/#home" className="inline-flex items-center gap-2">
            <Anchor className="h-6 w-6 text-secondary" aria-hidden="true" />
            <span className="text-lg font-bold tracking-tight">Nusa Gili Express</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Layanan island hopping privat ke gili eksotis di Lombok Barat, dengan kapal, alat
            snorkeling, dan antar-jemput yang aman dan nyaman.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <h2 className="text-sm font-semibold text-white">Halaman</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Kontak</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
            <li>
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-secondary"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contactDetails.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-xs text-white/60">
          &copy; {COPYRIGHT_YEAR} Nusa Gili Express. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}