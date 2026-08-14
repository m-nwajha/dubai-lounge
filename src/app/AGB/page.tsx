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
            "Diese Allgemeinen Geschäftsbedingungen gelten für Reservierungen und Leistungen der Dubai Lounge gegenüber Gästen, soweit keine individuell abweichende Vereinbarung getroffen wurde.",
        },
        {
          title: "2. Reservierungen",
          type: "paragraph",
          paragraph:
            "Reservierungen können insbesondere telefonisch, per E-Mail, über die Website oder vor Ort angefragt werden. Eine Reservierung ist erst verbindlich, wenn sie von der Dubai Lounge bestätigt wurde. Wünsche zu bestimmten Tischen oder Sitzbereichen können berücksichtigt, aber nicht garantiert werden.",
        },
        {
          title: "3. Verspätung und Freigabe reservierter Plätze",
          type: "paragraph",
          paragraph:
            "Kann eine Reservierung nicht rechtzeitig wahrgenommen werden, bitten wir um frühzeitige Mitteilung. Bei erheblicher Verspätung ohne Nachricht kann die Dubai Lounge reservierte Plätze anderweitig vergeben, soweit dies unter Berücksichtigung der Umstände angemessen ist.",
        },
        {
          title: "4. Preise und Zahlung",
          type: "paragraph",
          paragraph:
            "Es gelten die zum Zeitpunkt der Bestellung vor Ort ausgewiesenen Preise. Zahlungen sind mit den vor Ort angebotenen Zahlungsmitteln zu leisten. Gesetzliche Rechte bei fehlerhaften oder mangelhaften Leistungen bleiben unberührt.",
        },
        {
          title: "5. Alters- und Jugendschutz",
          type: "paragraph",
          paragraph:
            "Für Tabakwaren, nikotinhaltige Erzeugnisse, Shisha-Angebote und alkoholische Getränke gelten die gesetzlichen Alters- und Jugendschutzbestimmungen. Die Dubai Lounge ist berechtigt, einen geeigneten Altersnachweis zu verlangen und die Abgabe oder Nutzung zu verweigern, wenn die gesetzlichen Voraussetzungen nicht erfüllt sind.",
        },
        {
          title: "6. Hausrecht und Verhalten",
          type: "paragraph",
          paragraph:
            "Die Dubai Lounge übt das Hausrecht aus. Gäste haben Anweisungen des Personals zu beachten und sich so zu verhalten, dass andere Gäste, Mitarbeiter und die Einrichtung nicht beeinträchtigt oder gefährdet werden. Bei erheblichen Störungen, aggressivem Verhalten, Sachbeschädigungen oder Verstößen gegen gesetzliche Vorschriften kann der weitere Aufenthalt untersagt werden.",
        },
        {
          title: "7. Mitgebrachte Speisen und Getränke",
          type: "paragraph",
          paragraph:
            "Das Mitbringen und der Verzehr eigener Speisen und Getränke sind grundsätzlich nur mit vorheriger Zustimmung der Dubai Lounge gestattet.",
        },
        {
          title: "8. Schäden",
          type: "paragraph",
          paragraph:
            "Gäste haften nach den gesetzlichen Vorschriften für von ihnen schuldhaft verursachte Schäden an Einrichtung, Inventar oder sonstigem Eigentum der Dubai Lounge.",
        },
        {
          title: "9. Haftung",
          type: "paragraph",
          paragraph:
            "Die Dubai Lounge haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit. Im Übrigen richtet sich die Haftung nach den gesetzlichen Vorschriften. Zwingende Verbraucherrechte bleiben unberührt.",
        },
        {
          title: "10. Absage durch die Dubai Lounge",
          type: "paragraph",
          paragraph:
            "Kann eine bestätigte Reservierung aufgrund unvorhersehbarer Umstände, höherer Gewalt, behördlicher Anordnungen oder anderer nicht zu vertretender Gründe nicht durchgeführt werden, wird die Dubai Lounge den Gast nach Möglichkeit unverzüglich informieren. Weitergehende gesetzliche Ansprüche bleiben unberührt.",
        },
        {
          title: "11. Schlussbestimmungen",
          type: "paragraph",
          paragraph:
            "Es gilt deutsches Recht unter Beachtung zwingender Verbraucherschutzvorschriften. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleiben die übrigen Bestimmungen davon unberührt.",
        },
      ]}
    />
  );
}
