import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';

const MENU_ITEMS = [
  {
    title: 'Shisha Menü',
    description: 'Entdecke unsere große Auswahl an Shishas und verschiedenen Geschmacksrichtungen.',
    cta: 'Shisha Menü ansehen',
    href: '#menu',
    src: '/images/about-right-top.png',
    alt: 'Shisha with rising smoke',
  },
  {
    title: 'Speisen',
    description: 'Von Burgern und Snacks bis hin zu Salaten, Eis und süßen Desserts.',
    cta: 'Speisekarte ansehen',
    href: '#menu',
    src: '/images/instagram-galerie-img1.jpg',
    alt: 'Signature burger and fries',
  },
  {
    title: 'Getränke',
    description: 'Cocktails, Longdrinks, Softdrinks, Milkshakes, Kaffee und vieles mehr.',
    cta: 'Getränkekarte ansehen',
    href: '#menu',
    src: '/images/gallery-img-9.jpg',
    alt: 'Fine dining table with drinks',
  },
];

const Menu = () => {
  return (
    <section className="bg-[#000] py-20" id='menu'>
      <Container variant="xl">
        <AnimatedSection direction="up" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            Unser Menü
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Für jeden Geschmack das Richtige
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#fbce6b] to-transparent" />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map((item, index) => (
            <AnimatedSection
              key={item.title}
              direction="up"
              delay={index * 0.15}
              className="group gradient-border rounded-2xl p-px!"
            >
              <div className="gradient-border__content flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-[#0e0f0a]">
                  <p className="text-sm font-bold uppercase tracking-wide text-[#e0d5bd]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {item.description}
                  </p>
                  <Button
                    as="link"
                    href={item.href}
                    variant="outline"
                    className="mt-5 px-4 py-2 text-xs"
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Menu;
