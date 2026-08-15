"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { Container } from "./ui/Container";
import AnimatedSection from "./ui/AnimatedSection";

const GALLERY_ITEMS = [
  { src: "/images/Galerie/dubai-lounge-salzgitter-ambiente.jpeg", alt: "Dubai Lounge Salzgitter Ambiente" },
  { src: "/images/Galerie/dubai-lounge-shisha-bar-salzgitter.jpeg", alt: "Dubai Lounge Shisha Bar Salzgitter" },
  { src: "/images/Galerie/premium-shisha-dubai-lounge.jpeg", alt: "Premium Shisha Dubai Lounge" },
  { src: "/images/Galerie/dubai-lounge-cocktails-drinks.jpeg", alt: "Dubai Lounge Cocktails und Drinks" },
  { src: "/images/Galerie/shisha-cafe-salzgitter-interior.jpeg", alt: "Shisha Cafe Salzgitter Interior" },
  { src: "/images/Galerie/dubai-lounge-speisen-snacks.jpeg", alt: "Dubai Lounge Speisen und Snacks" },
  { src: "/images/Galerie/entspannte-atmosphare-dubai-lounge.jpeg", alt: "Entspannte Atmosphäre in der Dubai Lounge" },
  { src: "/images/Galerie/dubai-lounge-vip-bereich.jpeg", alt: "Dubai Lounge VIP Bereich" },
  { src: "/images/Galerie/shisha-geschmack-sorten.jpeg", alt: "Verschiedene Shisha Geschmack Sorten" },
  { src: "/images/Galerie/dubai-lounge-salzgitter-aussenbereich.jpeg", alt: "Dubai Lounge Salzgitter Außenbereich" },
  { src: "/images/Galerie/leckere-drinks-cocktailbar.jpeg", alt: "Leckere Drinks an der Cocktailbar" },
  { src: "/images/Galerie/dubai-lounge-event-location.jpeg", alt: "Dubai Lounge als Event Location" },
  { src: "/images/Galerie/shisha-lounge-niedersachsen.jpeg", alt: "Shisha Lounge Niedersachsen" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="overflow-x-hidden bg-[#0a0905] pt-5 pb-20">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="gallery-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.33,0 L0.92,0 Q1,0 0.9806,0.0776 L0.7694,0.9224 Q0.75,1 0.67,1 L0.08,1 Q0,1 0.0194,0.9224 L0.2306,0.0776 Q0.25,0 0.33,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <Container className="w-full">
        <AnimatedSection direction="up">
          <Swiper
            className="!overflow-visible min-h-[250px] md:min-h-[300px]"
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop={GALLERY_ITEMS.length > 5}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 2.4 },
              1024: { slidesPerView: 4 },
            }}
          >
            {GALLERY_ITEMS.map((item) => (
              <SwiperSlide key={item.src}>
                <div className="gallery-frame aspect-square">
                  <div className="gallery-frame__content">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Gallery;
