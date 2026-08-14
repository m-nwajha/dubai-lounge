"use client";

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
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
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
            <Button
              as="button"
              type="submit"
              variant="solid"
              className="mt-2 self-start"
            >
              Nachricht senden
            </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15} className="h-full">
            <div className="gradient-border h-[360px] rounded-2xl lg:h-full">
              <div className="gradient-border__content h-full overflow-hidden rounded-2xl">
              <iframe
                src="https://maps.google.com/maps?q=Albert-Schweitzer-Stra%C3%9Fe%2040,%2038226%20Salzgitter&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Dubai Lounge location"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
