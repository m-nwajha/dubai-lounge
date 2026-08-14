import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";

const BLOB_RADIUS =
  "rounded-[24px_60px_24px_60px] sm:rounded-[32px_90px_32px_90px] lg:rounded-[40px_120px_40px_120px]";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-6 right-0 h-64 w-64 opacity-50 sm:-top-10 sm:h-104 sm:w-104 lg:right-0">
        <Image
          src="/images/pattern-a.png"
          alt=""
          fill
          className="object-contain object-right-top opacity-30"
        />
      </div>

      <Container variant="xl" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
              Über uns
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Genuss trifft
              <br />
              Entspannung
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Die Dubai Lounge in Salzgitter steht für entspannte Abende, guten Geschmack
              und ein stilvolles Ambiente. Genieße eine große Auswahl an Shishas,
              erfrischenden Drinks, Cocktails sowie leckeren Speisen und Desserts &mdash;
              der perfekte Ort für entspannte Stunden mit Freunden.
            </p>
            <Button as="link" href="#menu" variant="outline" className="mt-8">
              Mehr entdecken
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15} className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="relative col-span-1 row-span-2">
              <div
                className={`absolute -bottom-4 -left-4 h-full w-full border border-[#fbce6b]/25 ${BLOB_RADIUS}`}
              />
              <div className={`gradient-border h-full ${BLOB_RADIUS}`}>
                <div className="gradient-border__content">
                  <Image
                    src="/images/about-left.png"
                    alt="Dubai Lounge cozy seating area"
                    fill
                    sizes="(min-width: 1024px) 28vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="gradient-border h-56 w-full rounded-2xl sm:h-72 skew-2">
              <div className="gradient-border__content">
                <Image
                  src="/images/about-right-top.png"
                  alt="Shisha with rising smoke"
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="gradient-border relative h-28 rounded-2xl sm:h-36 skew-2">
              <div className="gradient-border__content">
                <Image
                  src="/images/about-right-botton.png"
                  alt="Dubai Lounge lounge seating"
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_top_right,#000,transparent_70%)]" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default About;
