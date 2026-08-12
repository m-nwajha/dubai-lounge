import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Dubai Lounge",
};

export default function AgbPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen"
      content={[
        {
          title: "1. Geltungsbereich",
          type: "paragraph",
          paragraph:
            "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Tischreservierungen, Veranstaltungsbuchungen und Besuche der Dubai Lounge GmbH, Goseriede 6, 30159 Hannover, soweit nicht ausdrücklich etwas anderes vereinbart wurde.",
        },
        {
          title: "2. Reservierungen",
          type: "paragraph",
          paragraph:
            "Tischreservierungen können über unsere Website, telefonisch oder persönlich vorgenommen werden. Eine Reservierung gilt erst mit unserer Bestätigung als verbindlich. Reservierte Tische werden bis zu 15 Minuten nach der vereinbarten Uhrzeit freigehalten.",
        },
        {
          title: "3. Stornierungen",
          type: "paragraph",
          paragraph:
            "Reservierungen für kleinere Gruppen können bis zu 24 Stunden vor dem vereinbarten Termin kostenfrei storniert werden. Bei Gruppen- und Eventbuchungen ab 8 Personen behalten wir uns vor, bei kurzfristiger Absage oder Nichterscheinen eine Ausfallgebühr zu berechnen.",
        },
        {
          title: "4. Altersbeschränkung",
          type: "paragraph",
          paragraph:
            "Der Konsum von Shisha und alkoholischen Getränken in unserer Lounge ist gemäß den gesetzlichen Bestimmungen ausschließlich Gästen im entsprechenden Mindestalter gestattet. Wir behalten uns vor, einen gültigen Altersnachweis zu verlangen.",
        },
        {
          title: "5. Preise und Zahlung",
          type: "paragraph",
          paragraph:
            "Es gelten die zum Zeitpunkt des Besuchs ausgewiesenen Preise unserer Speise- und Getränkekarte. Die Zahlung erfolgt vor Ort in bar oder mit den angebotenen bargeldlosen Zahlungsmitteln.",
        },
        {
          title: "Verhaltensregeln für unsere Gäste",
          type: "list",
          list: [
            "Rücksichtnahme auf andere Gäste und das Personal",
            "Befolgung der Rauch- und Sicherheitsrichtlinien der Lounge",
            "Unverzügliche Meldung von Beschwerden oder Problemen an das Personal",
            "Begleichung der Rechnung vor Verlassen der Lounge",
          ],
        },
        {
          title: "6. Hausrecht",
          type: "paragraph",
          paragraph:
            "Wir behalten uns vor, Gästen bei Verstoß gegen diese Bedingungen oder bei Störung des Betriebsablaufs den Aufenthalt in der Lounge zu untersagen.",
        },
        {
          title: "7. Haftung",
          type: "paragraph",
          paragraph:
            "Für mitgebrachte Gegenstände unserer Gäste übernehmen wir keine Haftung, es sei denn, der Schaden beruht auf Vorsatz oder grober Fahrlässigkeit unsererseits.",
        },
        {
          title: "8. Schlussbestimmungen",
          type: "paragraph",
          paragraph:
            "Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.",
        },
      ]}
    />
  );
}
