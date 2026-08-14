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
          title: "1. Verantwortlicher",
          type: "paragraph",
          paragraph:
            "Dubai Lounge\nInhaber: Ali Delkhouaz\nAlbert-Schweitzer-Straße 40, 38226 Salzgitter\nTelefon: 0172 9376230\nE-Mail: info@dubai-lounge.net",
        },
        {
          title: "2. Allgemeine Hinweise",
          type: "paragraph",
          paragraph:
            "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen und zur Erfüllung gesetzlicher Pflichten erforderlich ist. Die Verarbeitung erfolgt nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) und den anwendbaren deutschen Datenschutzvorschriften.",
        },
        {
          title: "3. Server-Logfiles",
          type: "paragraph",
          paragraph:
            "Beim Aufruf der Website können durch den Hosting-Anbieter technisch erforderliche Daten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei, Browsertyp, Betriebssystem und Referrer-URL. Die Verarbeitung dient der sicheren und stabilen Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
        },
        {
          title: "4. Kontaktaufnahme und Kontaktformular",
          type: "paragraph",
          paragraph:
            "Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage der Anbahnung oder Durchführung eines Vertrags dient; im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        },
        {
          title: "5. Tischreservierungen",
          type: "paragraph",
          paragraph:
            "Bei einer Reservierungsanfrage verarbeiten wir die für die Reservierung erforderlichen Kontaktdaten und Angaben zur gewünschten Reservierung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nur so lange gespeichert, wie dies für die Reservierung und gesetzliche Nachweispflichten erforderlich ist.",
        },
        {
          title: "6. Google Maps",
          type: "paragraph",
          paragraph:
            "Auf der Website kann Google Maps zur Darstellung unseres Standorts eingebunden sein. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist grundsätzlich Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Beim Laden einer eingebetteten Karte können insbesondere die IP-Adresse sowie Geräte- und Nutzungsdaten an Google übermittelt werden. Soweit hierfür eine Einwilligung erforderlich ist, wird Google Maps erst nach Ihrer Einwilligung geladen; Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen stellt Google in seiner Datenschutzerklärung bereit.",
        },
        {
          title: "7. Externe Links und Social Media",
          type: "paragraph",
          paragraph:
            "Unsere Website kann Links zu externen Plattformen, insbesondere zu Instagram, enthalten. Beim bloßen Besuch unserer Website werden durch einen normalen externen Link noch keine Daten an die jeweilige Plattform übertragen. Erst beim Anklicken des Links verlassen Sie unsere Website; anschließend gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
        },
        {
          title: "8. Cookies und Einwilligungen",
          type: "paragraph",
          paragraph:
            "Technisch notwendige Cookies oder vergleichbare Speichertechnologien können eingesetzt werden, soweit sie für den Betrieb der Website erforderlich sind. Nicht notwendige Dienste und Technologien dürfen nur auf Grundlage einer erforderlichen Einwilligung aktiviert werden. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.",
        },
        {
          title: "9. Empfänger und Auftragsverarbeiter",
          type: "paragraph",
          paragraph:
            "Zur technischen Bereitstellung der Website können Dienstleister, insbesondere Hosting- und IT-Dienstleister, personenbezogene Daten in unserem Auftrag verarbeiten. Soweit gesetzlich erforderlich, bestehen entsprechende Verträge zur Auftragsverarbeitung.",
        },
        {
          title: "10. Ihre Rechte",
          type: "paragraph",
          paragraph:
            "Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Erteilte Einwilligungen können jederzeit für die Zukunft widerrufen werden.",
        },
        {
          title: "11. Beschwerderecht",
          type: "paragraph",
          paragraph:
            "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.",
        },
        {
          title: "12. Aktualität",
          type: "paragraph",
          paragraph:
            "Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen der Website, eingesetzte Dienste oder gesetzliche Anforderungen ändern.",
        },
      ]}
    />
  );
}
