import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Dubai Lounge",
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      title="Datenschutzerklärung"
      content={[
        {
          title: "1. Datenschutz auf einen Blick",
          type: "paragraph",
          paragraph:
            "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        },
        {
          title: "2. Verantwortliche Stelle",
          type: "paragraph",
          paragraph:
            "Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\nDubai Lounge GmbH\nGoseriede 6\n30159 Hannover\nTelefon: +49 511 123 456\nE-Mail: info@dubailounge.de",
        },
        {
          title: "3. Datenerfassung auf dieser Website",
          type: "paragraph",
          paragraph:
            "Beim Besuch dieser Website erfassen wir automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser übermittelt (z. B. Browsertyp, verwendetes Betriebssystem, Referrer-URL, Uhrzeit der Serveranfrage). Diese Daten sind nicht bestimmten Personen zuordenbar und werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs sowie zur Verbesserung unseres Angebots ausgewertet.",
        },
        {
          title: "4. Kontaktformular",
          type: "paragraph",
          paragraph:
            "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        },
        {
          title: "5. Tischreservierungen",
          type: "paragraph",
          paragraph:
            "Bei einer Tischreservierung über unsere Website verarbeiten wir die von Ihnen angegebenen Daten (Name, Telefonnummer, E-Mail-Adresse, gewünschter Termin) ausschließlich zur Bearbeitung und Bestätigung Ihrer Reservierung.",
        },
        {
          title: "Ihre Rechte",
          type: "list",
          list: [
            "Auskunft über Ihre bei uns gespeicherten Daten",
            "Berichtigung unrichtiger personenbezogener Daten",
            "Löschung Ihrer bei uns gespeicherten Daten",
            "Einschränkung der Datenverarbeitung",
            "Widerspruch gegen die Verarbeitung Ihrer Daten",
            "Datenübertragbarkeit",
          ],
        },
        {
          title: "6. Widerruf Ihrer Einwilligung zur Datenverarbeitung",
          type: "paragraph",
          paragraph:
            "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
        },
        {
          title: "7. SSL- bzw. TLS-Verschlüsselung",
          type: "paragraph",
          paragraph:
            "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \"http://\" auf \"https://\" wechselt.",
        },
      ]}
    />
  );
}
