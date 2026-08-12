import Hero from "@/components/Hero";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import PopularFlavours from "@/components/PopularFlavours";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offerings />
      <Gallery />
      <Menu />
      <PopularFlavours />
      <Reservation />
      <Contact  />
    </>
  );
}
