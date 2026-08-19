"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";
import AnimatedSection from "./ui/AnimatedSection";

const HIGHLIGHTS = [
  "Lounge virtuell erkunden",
  "Ambiente & Atmosphäre entdecken",
  "Einen echten Rundumblick erhalten",
];

const Reservation = () => {
  const [isPanoramaOpen, setIsPanoramaOpen] = useState(false);

  return (
    <section className="bg-black py-20 sm:py-24">
      <Container variant="xl">
        <AnimatedSection direction="up" className="text-center mb-[60px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            Erlebe den Moment
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Erlebe unsere Lounge hautnah
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#fbce6b] to-transparent" />
        </AnimatedSection>
        <AnimatedSection direction="up" className="gradient-border rounded-2xl">
          <div className="gradient-border__content relative flex min-h-[280px] items-center overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-bg.png"
              alt="Dubai Lounge rooftop view"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

            <div className="relative z-10 max-w-md px-6 py-10 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
                360° Virtual Tour
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Entdecke die Dubai Lounge
                <br />
                <span className="font-normal text-white/90">in 360°</span>
              </h2>

              <ul className="mt-5 space-y-2">
                {HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#fbce6b]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                as="button"
                variant="solid"
                onClick={() => setIsPanoramaOpen(true)}
                className="mt-6"
              >
                360° Tour starten
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      <Modal
        isOpen={isPanoramaOpen}
        onClose={() => setIsPanoramaOpen(false)}
        title="360° Venue Panorama"
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1787154745198!6m8!1m7!1sCAoSHENJQUJJaEFCR2xPdzFLekQybHlIcG5sOFNSeng.!2m2!1d52.1546134!2d10.3276479!3f284.7312253127906!4f-7.2957649017584885!5f0.6556821664424943"
            title="Dubai Lounge 360° panorama"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Reservation;
