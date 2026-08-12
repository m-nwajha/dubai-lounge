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
          title: "Angaben gemäß § 5 TMG",
          type: "paragraph",
          paragraph:
            "Dubai Lounge GmbH\nGoseriede 6\n30159 Hannover\nDeutschland",
        },
        {
          title: "Vertreten durch",
          type: "paragraph",
          paragraph: "Geschäftsführer: Ahmed Al-Farsi",
        },
        {
          title: "Kontakt",
          type: "paragraph",
          paragraph: "Telefon: +49 511 123 456\nE-Mail: info@dubailounge.de",
        },
        {
          title: "Registereintrag",
          type: "paragraph",
          paragraph:
            "Eintragung im Handelsregister.\nRegistergericht: Amtsgericht Hannover\nRegisternummer: HRB 123456",
        },
        {
          title: "Umsatzsteuer-ID",
          type: "paragraph",
          paragraph:
            "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789",
        },
        {
          title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
          type: "paragraph",
          paragraph: "Ahmed Al-Farsi, Goseriede 6, 30159 Hannover",
        },
        {
          title: "Haftung für Inhalte",
          type: "paragraph",
          paragraph:
            "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        },
        {
          title: "Haftung für Links",
          type: "paragraph",
          paragraph:
            "Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        },
        {
          title: "Urheberrecht",
          type: "paragraph",
          paragraph:
            "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        },
      ]}
    />
  );
}
