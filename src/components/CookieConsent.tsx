"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 0);
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-3xl mx-auto z-[999] border-t border-[#fbce6b]/20 bg-[#0a0905]/95 px-4 py-6 backdrop-blur-md sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="max-w-3xl text-center sm:text-left">
            <p className="text-sm leading-relaxed text-white/80">
              Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer
              Website zu ermöglichen. Weitere Informationen finden Sie in
              unserer{" "}
              <Link
                href="/datenschutz"
                className="text-[#fbce6b] underline transition hover:text-[#fbce6b]/80"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button
              as="button"
              variant="outline"
              onClick={() => handleChoice("declined")}
              className="px-4 py-2 text-xs"
            >
              Ablehnen
            </Button>
            <Button
              as="button"
              variant="solid"
              onClick={() => handleChoice("accepted")}
              className="px-4 py-2 text-xs"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
