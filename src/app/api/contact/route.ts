import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message, recaptchaToken } = body;

    // 1. Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token fehlt." },
        { status: 400 },
      );
    }

    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: recaptchaToken,
        }),
      },
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA-Verifizierung fehlgeschlagen." },
        { status: 400 },
      );
    }

    // 2. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Dubai Lounge Contact <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO || ""],
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#0d0d0d; font-family: Inter, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding: 32px 40px; background-color:#111111; border-radius:12px 12px 0 0; border-bottom: 1px solid #ffffff18; text-align:center;">
              <p style="margin:0; color:#fbce6b; font-size:26px; font-weight:bold; letter-spacing:4px; text-transform:uppercase;">DUBAI LOUNGE</p>
              <p style="margin:6px 0 0; color:#ffffff55; font-size:11px; letter-spacing:3px; text-transform:uppercase;">Neue Kontaktanfrage</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 36px 40px; background-color:#161616; border-left:1px solid #ffffff10; border-right:1px solid #ffffff10;">

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#1e1e1e; border:1px solid #ffffff15; border-radius:8px; padding:16px 20px;">
                    <p style="margin:0 0 4px; color:#fbce6b; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Name</p>
                    <p style="margin:0; color:#ffffff; font-size:15px; font-weight:300;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#1e1e1e; border:1px solid #ffffff15; border-radius:8px; padding:16px 20px;">
                    <p style="margin:0 0 4px; color:#fbce6b; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Telefon</p>
                    <p style="margin:0; color:#ffffff; font-size:15px; font-weight:300;">${phone || "Nicht angegeben"}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#1e1e1e; border:1px solid #ffffff15; border-radius:8px; padding:16px 20px;">
                    <p style="margin:0 0 4px; color:#fbce6b; font-size:11px; letter-spacing:2px; text-transform:uppercase;">E-Mail</p>
                    <p style="margin:0; color:#ffffff; font-size:15px; font-weight:300;">${email}</p>
                  </td>
                </tr>
              </table>

              <!-- Subject -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#1e1e1e; border:1px solid #ffffff15; border-radius:8px; padding:16px 20px;">
                    <p style="margin:0 0 4px; color:#fbce6b; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Betreff</p>
                    <p style="margin:0; color:#ffffff; font-size:15px; font-weight:300;">${subject}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1e1e1e; border:1px solid #ffffff15; border-radius:8px; padding:16px 20px;">
                    <p style="margin:0 0 8px; color:#fbce6b; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Nachricht</p>
                    <p style="margin:0; color:#ffffffcc; font-size:15px; font-weight:300; line-height:1.7;">${message}</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color:#111111; border-radius:0 0 12px 12px; border-top:1px solid #ffffff18; text-align:center;">
              <p style="margin:0; color:#ffffff33; font-size:11px; letter-spacing:2px; text-transform:uppercase;">© ${new Date().getFullYear()} Dubai Lounge Powered By <a
              href="https://orionlens.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OrionLens
            </a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
            `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Nachricht erfolgreich gesendet." });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Serverfehler. Bitte versuche es erneut." },
      { status: 500 },
    );
  }
}
