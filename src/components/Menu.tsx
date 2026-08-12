import Image from 'next/image';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';

const MENU_ITEMS = [
  {
    title: 'Shisha Menu',
    description: 'Explore our wide range of flavours for every taste.',
    cta: 'View Shisha Menu',
    href: '#menu',
    src: '/images/about-right-top.png',
    alt: 'Shisha with rising smoke',
  },
  {
    title: 'Food Menu',
    description: 'From light bites to signature dishes.',
    cta: 'View Food Menu',
    href: '#menu',
    src: '/images/instagram-galerie-img1.jpg',
    alt: 'Signature burger and fries',
  },
  {
    title: 'Drinks Menu',
    description: 'Refreshing drinks & creative cocktails.',
    cta: 'View Drinks Menu',
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
            Our Menu
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            A Taste for Every Mood
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
