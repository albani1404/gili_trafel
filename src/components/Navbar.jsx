import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import Button from './Button';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [seen, setSeen] = useState('home');
  const [pressed, setPressed] = useState(null);
  const onHome = useLocation().pathname === '/';
  // On a destination page the "Destinations" item stays highlighted
  const active = onHome ? seen : 'destinations';

  // Highlight the menu item for the section currently in view (home page only)
  useEffect(() => {
    if (!onHome) return;
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSeen(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handlePress = (id) => {
    setPressed(id);
    window.setTimeout(() => setPressed((current) => (current === id ? null : current)), 320);
  };

  const desktopLink = (id) =>
    `relative inline-flex py-2 text-sm font-semibold transition-colors duration-200 ${pressed === id ? 'nav-link-press' : ''
    } ${active === id
      ? 'text-brand after:absolute after:inset-x-0 after:-bottom-3.5 after:h-0.5 after:origin-left after:scale-x-100 after:bg-brand after:transition-transform after:duration-300'
      : 'text-muted after:absolute after:inset-x-0 after:-bottom-3.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100'
    }`;

  const mobileLink = (id) =>
    `block rounded-lg px-3 py-3 text-base font-semibold transition-all duration-200 ${pressed === id ? 'nav-link-press' : ''
    } ${active === id ? 'bg-brand-soft text-brand' : 'text-text hover:bg-surface'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-sand/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Utama">
        <Link to="/#home" className="flex items-center gap-2 text-ink" aria-label="Nusa Gili Express, beranda">
          <Anchor className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight">Nusa Gili Express</span>
        </Link>

        {/* Desktop: links sit on the right */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  className={desktopLink(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => handlePress(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            to="/#contact"
            variant="accent"
            size="sm"
            onClick={() => handlePress('cta')}
            className={pressed === 'cta' ? 'nav-link-press' : ''}
          >
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="-mr-2 rounded-lg p-2 text-ink hover:bg-surface md:hidden"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {isOpen && (
        <div id="mobile-menu" className="border-t border-line bg-sand md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  onClick={() => {
                    handlePress(link.id);
                    setIsOpen(false);
                  }}
                  className={mobileLink(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                to="/#contact"
                onClick={() => {
                  handlePress('cta');
                  setIsOpen(false);
                }}
                variant="accent"
                className={`w-full ${pressed === 'cta' ? 'nav-link-press' : ''}`}
              >
                Hubungi Kami
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}