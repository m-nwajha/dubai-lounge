import Image from "next/image";
import { Container } from "./ui/Container";

// TODO: swap in a dedicated photo per flavour once available — reusing one placeholder for now.
const FLAVOURS = [
  "Blue Mist",
  "Love 66",
  "Pina Colada",
  "Grape Mint",
  "Double Apple",
  "Tropical",
].map((name) => ({ name, src: "/images/favorites-icon1.png" }));

const PopularFlavours = () => {
  return (
    <section className="bg-black py-20">
      <Container variant="xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            Popular Flavours
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Customer Favorites
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#fbce6b] to-transparent" />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FLAVOURS.map((flavour) => (
            <div
              key={flavour.name}
              className="gradient-border rounded-xl p-[1px]! text-center transition-transform hover:skew-2"
            >
              <div className="gradient-border__content flex flex-col items-center gap-3 bg-[#171007]! px-4 py-3">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={flavour.src}
                    alt={flavour.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  {flavour.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularFlavours;
