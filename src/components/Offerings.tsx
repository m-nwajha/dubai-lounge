import { Container } from "./ui/Container";
import AnimatedSection from "./ui/AnimatedSection";

const OFFERINGS = [
  {
    title: "Premium Shisha",
    subtitle: "Wide range of unique flavours",
    icon: (
      <>
        <circle cx="12" cy="4.2" r="1.2" />
        <path d="M12 5.4V8M9 8h6l-.8 3H9.8L9 8z" strokeLinejoin="round" />
        <path
          d="M8.5 11h7l-.7 6.5a2.8 2.8 0 0 1-2.8 2.5v0a2.8 2.8 0 0 1-2.8-2.5L8.5 11z"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Delicious Food",
    subtitle: "Fresh & tasty dishes made to perfection",
    icon: (
      <>
        <path d="M4 15a8 8 0 0 1 16 0" strokeLinecap="round" />
        <path d="M3 15h18" strokeLinecap="round" />
        <path d="M12 7V4.4" strokeLinecap="round" />
        <circle cx="12" cy="3.3" r="0.9" />
      </>
    ),
  },
  {
    title: "Signature Drinks",
    subtitle: "Mocktails, cocktails & beverages",
    icon: (
      <>
        <path
          d="M5 5h14l-6.5 7.5v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 19h5" strokeLinecap="round" />
        <path d="M8.2 8.5h7.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "VIP Ambience",
    subtitle: "Luxury setting for unforgettable moments",
    icon: (
      <path
        d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z"
        strokeLinejoin="round"
      />
    ),
  },
];

const Offerings = () => {
  return (
    <section className="relative py-20 bg-[#0a0905]">
      <div className="absolute top-0 left-0 right-0 mx-auto h-[2px] w-[50%] bg-gradient-to-r from-transparent via-[#37270f] to-transparent" />

      <Container variant="xl">
        <AnimatedSection direction="up" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            What We Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Indulge in Our Signature Experience
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#fbce6b] to-transparent" />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERINGS.map((item, index) => (
            <AnimatedSection
              key={item.title}
              direction="up"
              delay={index * 0.15}
              className="gradient-border-glow before:p-[1px]! rounded-xl overflow-hidden bg-[#0c0b07] p-8 text-center"
            >
              <div className="gradient-border-glow__content">
                <span className="mx-auto flex items-center justify-center text-[#fbce6b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-15 w-15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {item.icon}
                  </svg>
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#a88846]">
                  {item.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#807454]">
                  {item.subtitle}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Offerings;
