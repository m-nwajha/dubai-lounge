"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import AnimatedSection from './ui/AnimatedSection';

const MENU_ITEMS = [
  {
    title: 'Shisha Menü',
    description: 'Entdecke unsere große Auswahl an Shishas und verschiedenen Geschmacksrichtungen.',
    cta: 'Shisha Menü ansehen',
    pdf: '/pdf/shisha.pdf',
    src: '/images/shisha.jpeg',
    alt: 'Shisha with rising smoke',
  },
  {
    title: 'Speisen',
    description: 'Von Burgern und Snacks bis hin zu Salaten, Eis und süßen Desserts.',
    cta: 'Speisekarte ansehen',
    pdf: '/pdf/food.pdf',
    src: '/images/speisen.jpeg',
    alt: 'Signature burger and fries',
  },
  {
    title: 'Getränke',
    description: 'Cocktails, Longdrinks, Softdrinks, Milkshakes, Kaffee und vieles mehr.',
    cta: 'Getränkekarte ansehen',
    pdf: '/pdf/drinks.pdf',
    src: '/images/getranke.jpeg',
    alt: 'Fine dining table with drinks',
  },
];

const Menu = () => {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);

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
                    as="button"
                    onClick={() => setActivePdf({ title: item.title, url: item.pdf })}
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

      <Modal
        isOpen={!!activePdf}
        onClose={() => setActivePdf(null)}
        title={activePdf?.title}
      >
        {activePdf && (
          <object
            data={`${activePdf.url}#view=FitH`}
            type="application/pdf"
            className="h-full w-full rounded-lg border-0 bg-white"
            title={activePdf.title}
          >
            <div className="flex h-full flex-col items-center justify-center p-4 text-center">
              <p className="text-black/80 mb-4">Dein Browser unterstützt die direkte PDF-Anzeige leider nicht.</p>
              <a 
                href={activePdf.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded bg-[#fbce6b] px-4 py-2 font-bold text-black hover:bg-[#e0b555]"
              >
                Menü herunterladen / öffnen
              </a>
            </div>
          </object>
        )}
      </Modal>
    </section>
  );
};

export default Menu;
