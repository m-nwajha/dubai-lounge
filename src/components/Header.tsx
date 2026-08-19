"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CN } from "@/utils/className";
import { Container } from "./ui/Container";
import { Box } from "./ui/Box";
import { Button } from "./ui/Button";
import Logo from "./ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Über Uns", href: "/#about" },
  { label: "Menü", href: "/#menu" },
  { label: "Galerie", href: "/#gallery" },
  { label: "Favoriten", href: "/#favorites" },
  { label: "Kontakt", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={CN(
        "fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out",
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <Container variant="xl">
        <Box
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="h-25"
        >
          <Logo />

          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={CN(
                  "text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#fbce6b]",
                  link.label === "Home" ? "text-[#fbce6b]" : "text-white/90",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button as="link" href="/#contact" className="hidden lg:inline-flex">
            Tisch reservieren
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </Box>
      </Container>

      <div
        className={CN(
          "overflow-hidden border-t border-white/10 bg-black transition-[max-height] duration-300 ease-in-out lg:hidden",
          isMenuOpen ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={CN(
                "rounded px-2 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors hover:text-amber-400",
                link.label === "Home" ? "text-[#fbce6b]" : "text-white/90",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button as="link" href="/#contact" className="mt-2 w-full">
            Tisch reservieren
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
