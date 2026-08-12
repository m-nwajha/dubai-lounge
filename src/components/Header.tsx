"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CN } from "@/utils/className";
import { Container } from "./ui/Container";
import { Box } from "./ui/Box";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const LogoMark = () => (
  <svg
    viewBox="0 0 32 40"
    className="h-8 w-auto shrink-0 text-[#fbce6b]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path
      d="M7 39V16.5C7 13 9 9 12 9c2.2 0 3.5 1.6 3.5 4v1"
      strokeLinecap="round"
    />
    <path d="M25 39V19c0-4-2.3-7-6-7" strokeLinecap="round" />
    <circle cx="12" cy="6" r="2.2" />
    <circle cx="19" cy="9" r="1.6" />
    <path d="M2 39h28" strokeLinecap="round" />
  </svg>
);

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
          <Link href="/" className="flex items-center gap-2">
            <LogoMark />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-wide text-[#fbce6b]">
                DUBAI
              </span>
              <span className="text-[10px] font-medium tracking-[0.4em] text-[#81632f]">
                LOUNGE
              </span>
            </span>
          </Link>

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

          <Button as="link" href="#reserve" className="hidden lg:inline-flex">
            Reserve a Table
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
          <Button as="link" href="#reserve" className="mt-2 w-full">
            Reserve a Table
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
