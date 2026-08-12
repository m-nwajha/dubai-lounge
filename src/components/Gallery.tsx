"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { Container } from "./ui/Container";

const GALLERY_ITEMS = [
  {
    src: "/images/about-right-top.png",
    alt: "Shisha with rising smoke",
  },
  {
    src: "/images/instagram-galerie-img1.jpg",
    alt: "Signature burger and fries",
  },
  {
    src: "/images/gallery-img-9.jpg",
    alt: "Fine dining table setting",
  },
  {
    src: "/images/about-right-botton.png",
    alt: "Dubai Lounge seating area",
  },
  {
    src: "/images/unsere-geschichte-img2.png",
    alt: "Dubai Lounge seating area",
  },
  {
    src: "/images/instagram-galerie-img3.jpg",
    alt: "Dubai Lounge seating area",
  },
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
        <Swiper
          className="!overflow-visible"
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
      </Container>
    </section>
  );
};

export default Gallery;
