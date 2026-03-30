import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateConfirmationToken } from '@/lib/auth';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email ?? '').trim().toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    const { token, ts } = generateConfirmationToken(email);
    const confirmUrl = `${BASE_URL}/warteliste?email=${encodeURIComponent(email)}&token=${token}&ts=${ts}`;

    if (!process.env.RESEND_API_KEY) {
      console.warn('[subscribe] RESEND_API_KEY fehlt – E-Mail wird nicht versendet.');
      console.info('[subscribe] Bestätigungslink (dev):', confirmUrl);
      return NextResponse.json({ success: true, dev_confirm_url: confirmUrl });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Klawflow <${process.env.RESEND_FROM_EMAIL ?? 'noreply@klawflow.de'}>`,
      to: email,
      subject: 'Bitte bestätige deine Anmeldung – Klawflow',
      html: buildConfirmationEmail(email, confirmUrl),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[subscribe] Fehler:', err);
    return NextResponse.json(
      { error: 'Server momentan nicht erreichbar. Bitte versuche es in Kürze erneut.' },
      { status: 500 }
    );
  }
}

function buildConfirmationEmail(email: string, confirmUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bestätige deine Anmeldung – Klawflow</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 24px;font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">
                Klawflow
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;line-height:1.2;">
                Fast geschafft! Bitte bestätige deine E-Mail.
              </h1>
              <p style="margin:0 0 24px;font-size:15px;color:#a0a0a0;line-height:1.6;">
                Du hast dich mit <strong style="color:#fff;">${email}</strong> für die Klawflow-Warteliste eingetragen.
                Klicke auf den Button unten, um deine Anmeldung zu bestätigen.
              </p>
              <p style="margin:0 0 32px;font-size:13px;color:#6b6b6b;">
                Der Link ist 24 Stunden gültig.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:9999px;background:#ffffff;">
                    <a href="${confirmUrl}"
                       style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#0a0a0a;text-decoration:none;border-radius:9999px;letter-spacing:-0.01em;">
                      Anmeldung bestätigen →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback link -->
              <p style="margin:24px 0 0;font-size:12px;color:#6b6b6b;word-break:break-all;">
                Wenn der Button nicht funktioniert, kopiere diesen Link in deinen Browser:<br/>
                <a href="${confirmUrl}" style="color:#7c6fff;text-decoration:none;">${confirmUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:#6b6b6b;">
                Du erhältst diese E-Mail, weil du dich auf klawflow.de eingetragen hast.
                Falls das nicht du warst, kannst du diese E-Mail ignorieren.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
