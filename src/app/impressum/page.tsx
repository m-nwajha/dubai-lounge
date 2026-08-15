import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Impressum",
  description: "Impressum von Dubai Lounge",
};

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      content={[
        {
          title: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
          type: "paragraph",
          paragraph:
            "Anbieter\nDubai Lounge\nInhaber: Ali Delkhouaz\nAlbert-Schweitzer-Straße 40, 38226 Salzgitter",
        },
        {
          title: "Kontakt",
          type: "paragraph",
          paragraph: "Telefon: 0172 9376230\nE-Mail: info@dubai-lounge.net\nWeb: dubai-lounge.net",
        },
        {
          title: "Steuerliche Angaben",
          type: "paragraph",
          paragraph:
            "Steuernummer: wird nachgetragen.",
        },
        {
          title: "Verantwortlich für den Inhalt",
          type: "paragraph",
          paragraph: "Ali Delkhouaz\nAlbert-Schweitzer-Straße 40, 38226 Salzgitter",
        },
        {
          title: "Verbraucherstreitbeilegung",
          type: "paragraph",
          paragraph:
            "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        },
        {
          title: "Haftung für Inhalte",
          type: "paragraph",
          paragraph:
            "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nur im Rahmen der gesetzlichen Vorschriften.",
        },
        {
          title: "Haftung für Links",
          type: "paragraph",
          paragraph:
            "Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
        },
        {
          title: "Urheberrecht",
          type: "paragraph",
          paragraph:
            "Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der gesetzlich zulässigen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.",
        },
      ]}
    />
  );
}
