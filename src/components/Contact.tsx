"use client";

import { Container } from "./ui/Container";
import { TextField } from "./ui/TextField";
import { TextArea } from "./ui/TextArea";
import { SelectField } from "./ui/SelectField";
import { Button } from "./ui/Button";
import AnimatedSection from "./ui/AnimatedSection";

const SUBJECT_OPTIONS = [
  { label: "General Inquiry", value: "general" },
  { label: "Reservation", value: "reservation" },
  { label: "Events & Groups", value: "events" },
  { label: "Feedback", value: "feedback" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0a0905] py-20">
      <div className="absolute top-0 left-0 right-0 mx-auto h-[2px] w-[50%] bg-gradient-to-r from-transparent via-[#37270f] to-transparent" />
      <Container variant="xl">
        <AnimatedSection direction="up" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            Contact Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
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
                label="Full Name"
                placeholder="Your name"
                required
              />
              <TextField
                id="contact-phone"
                name="phone"
                type="tel"
                label="Phone"
                placeholder="+971 ..."
              />
            </div>
            <TextField
              id="contact-email"
              name="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              required
            />
            <SelectField
              id="contact-subject"
              name="subject"
              label="Subject"
              options={SUBJECT_OPTIONS}
            />
            <TextArea
              id="contact-message"
              name="message"
              label="Message"
              placeholder="Tell us how we can help..."
              rows={5}
              required
            />
            <Button
              as="button"
              type="submit"
              variant="solid"
              className="mt-2 self-start"
            >
              Send Message
            </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15} className="h-full">
            <div className="gradient-border h-[360px] rounded-2xl lg:h-full">
              <div className="gradient-border__content h-full overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.6657111923014!2d10.367277775757612!3d52.04940107096577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a54517451c2a61%3A0x901716de815935e5!2sAn%20d.%20Erzbahn%208%2C%2038259%20Bad%2C%20Germany!5e0!3m2!1sen!2s!4v1786537794843!5m2!1sen!2s"
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
