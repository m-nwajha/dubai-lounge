"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container } from "./ui/Container";
import { TextField } from "./ui/TextField";
import { TextArea } from "./ui/TextArea";
import { SelectField } from "./ui/SelectField";
import { Button } from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";

const SUBJECT_OPTIONS = [
  { label: "Anliegen auswählen", value: "general" },
  { label: "Reservierung", value: "reservation" },
  { label: "Events & Gruppen", value: "events" },
  { label: "Feedback", value: "feedback" },
];

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      setStatus("error");
      setErrorMessage("Bitte bestätige, dass du kein Roboter bist.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Ein Fehler ist aufgetreten.");
      }

      setStatus("success");
      form.reset();
      recaptchaRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Ein unbekannter Fehler ist aufgetreten.",
      );
    }
  };

  return (
    <section id="contact" className="relative bg-[#0a0905] py-20">
      <div className="absolute top-0 left-0 right-0 mx-auto h-[2px] w-[50%] bg-gradient-to-r from-transparent via-[#37270f] to-transparent" />
      <Container variant="xl">
        <AnimatedSection direction="up" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Wir freuen uns auf dich
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#fbce6b] to-transparent" />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <AnimatedSection direction="right">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <TextField
                  id="contact-name"
                  name="name"
                  label="Name"
                  placeholder="Dein Name"
                  required
                />
                <TextField
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  label="Telefon"
                  placeholder="Deine Telefonnummer"
                />
              </div>
              <TextField
                id="contact-email"
                name="email"
                type="email"
                label="E-Mail"
                placeholder="Deine E-Mail-Adresse"
                required
              />
              <SelectField
                id="contact-subject"
                name="subject"
                label="Betreff"
                options={SUBJECT_OPTIONS}
              />
              <TextArea
                id="contact-message"
                name="message"
                label="Nachricht"
                placeholder="Wie können wir dir helfen?"
                rows={5}
                required
              />
              <div className="mt-2">
                {isMounted && (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                      "6Lf-Jk0rAAAAALbYwHWsZFldub2lDFSeKDTiwEcQ"
                    }
                    theme="dark"
                  />
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-[#fbce6b]">
                  Nachricht erfolgreich gesendet! Wir melden uns in Kürze.
                </p>
              )}

              <Button
                as="button"
                type="submit"
                variant="solid"
                className="mt-2 self-start disabled:opacity-50"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15} className="h-full">
            <div className="gradient-border h-[360px] rounded-2xl lg:h-full">
              <div className="gradient-border__content h-full overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10026522.133773986!2d-9.1841918!3d52.1546669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a551004afc9073%3A0xf611a91443d70700!2sDUBAI%20Lounge!5e0!3m2!1sen!2s!4v1786793029122!5m2!1sen!2s"
                  title="Dubai Lounge location"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
