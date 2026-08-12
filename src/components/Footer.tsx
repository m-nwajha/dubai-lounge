import Link from 'next/link';
import { Container } from './ui/Container';
import { LogoMark } from './Header';

const WORKING_HOURS = [
  { days: 'Mo–Do', hours: '11:00–22:00 Uhr' },
  { days: 'Feiertage', hours: ' 09:00–12:30 Uhr' },
];

const LEGAL_LINKS = [
  { label: 'Impressum', href: '#' },
  { label: 'Datenschutzerklärung', href: '#' },
  { label: 'AGB', href: '#' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.6-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.5v3H11v7h3z" />
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />,
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <>
        <path d="M7 17l-1.2 3.2L9 19a7.5 7.5 0 1 0-3.4-2.9" />
        <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.4.9-1l-.2-1a.8.8 0 0 0-.9-.6l-1.1.2a4 4 0 0 1-2.8-2.8l.2-1.1a.8.8 0 0 0-.6-.9l-1-.2c-.6-.1-1 .3-1 .9z" />
      </>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050403]">
      <Container variant="xl" className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wide text-[#fbce6b]">DUBAI</span>
                <span className="text-[10px] font-medium tracking-[0.4em] text-[#81632f]">
                  LOUNGE
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-white/50">
              Dubai&apos;s premier destination for shisha, fine dining and unforgettable
              nights in a luxurious atmosphere.
            </p>
          </div>

          <div>
            <p className="text-[0.9rem] font-bold uppercase tracking-wide text-[#fbce6b]">
              Öffnungszeiten
            </p>
            <ul className="mt-4 space-y-3">
              {WORKING_HOURS.map((item) => (
                <li key={item.days} className="text-[0.9rem] text-white/50">
                  <span className="block text-white/80">{item.days}</span>
                  {item.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.9rem] font-bold uppercase tracking-wide text-[#fbce6b]">Nützliche Links</p>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.9rem] text-white/50 transition-colors hover:text-[#fbce6b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.9rem] font-bold uppercase tracking-wide text-[#fbce6b]">Contact</p>
            <ul className="mt-4 space-y-3 text-[0.9rem] text-white/50">
              <li>Goseriede 6, 30159 Hannover</li>
              <li>+971 4 123 4567</li>
              <li>info@dubailounge.de</li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fbce6b]/60 text-[#fbce6b] transition-colors hover:border-white/15 hover:text-white/70"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container
          variant="2xl"
          className="flex flex-col items-center gap-2 py-6 text-center text-[1rem] text-white/40 sm:flex-row sm:justify-center sm:text-left"
        >
          <p>&copy; {new Date().getFullYear()} Dubai Lounge</p>
          <p>
            Powered By{' '}
            <a
              href="https://orionlens.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fbce6b] transition-colors hover:text-white"
            >
              OrionLens
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
