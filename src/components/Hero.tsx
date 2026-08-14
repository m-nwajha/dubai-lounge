import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { CN } from '@/utils/className';

const FEATURES = [
  {
    title: 'Premium Shisha',
    subtitle: 'Große Auswahl für jeden Geschmack',
    icon: (
      <path d="M4 8l3 2 5-6 5 6 3-2-2 10H6L4 8z" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    title: 'Frische Drinks',
    subtitle: 'Cocktails, Softdrinks & mehr',
    icon: (
      <>
        <path d="M5 5h14l-6.5 7.5v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19h5" strokeLinecap="round" />
        <path d="M8.2 8.5h7.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Lounge Ambiente',
    subtitle: 'Entspannen & genießen',
    icon: (
      <>
        <path d="M4 18v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 18h18M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" strokeLinecap="round" />
      </>
    ),
  },
];

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#5a3d11] text-[#915c0a]">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      {children}
    </svg>
  </span>
);

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-black pt-24 pb-14 sm:pt-28">
      <Image
        src="/images/hero-bg.png"
        alt="Dubai Lounge interior with shisha and city skyline view"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[78%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-black/5" />

      <Container variant="xl" className="relative z-10">
        <div className="max-w-xl">
          <p className="font-script text-2xl text-[#fbce6b] sm:text-3xl">Premium Lounge Experience</p>

          <h1 className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Dubai
            <br />
            Lounge
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#fbce6b] sm:text-base">
            Shisha &bull; Food &bull; Drinks
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Erlebe entspannte Abende mit Premium-Shisha, erfrischenden Drinks und leckeren
            Speisen in stilvoller Atmosphäre.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button as="link" href="#contact" variant="solid" className="px-8">
              Tisch reservieren
            </Button>
            <Button as="link" href="#menu" variant="outline" className="px-8">
              Menü entdecken
            </Button>
          </div>

          <div className="gradient-border-glow mt-12 rounded-2xl">
            <div
              className={CN(
                'gradient-border-glow__content grid grid-cols-1 gap-6 bg-black/40 p-5 backdrop-blur-sm',
                'sm:grid-cols-3 sm:gap-4',
              )}
            >
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/60">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
