import { NextRequest, NextResponse } from 'next/server';

/**
 * Calendly Webhook Endpoint (Pfad C)
 *
 * Konfiguration in Calendly:
 *   Dashboard → Integrations → Webhooks → New Webhook
 *   URL: https://deinedomain.de/api/calendly-webhook
 *   Events: invitee.created
 *
 * Dieser Endpoint empfängt die Buchungsdaten und leitet sie ans CRM weiter.
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const eventType = payload?.event ?? 'unknown';
    const invitee = payload?.payload?.invitee ?? {};

    const name: string = invitee?.name ?? '';
    const email: string = invitee?.email ?? '';
    const scheduledAt: string = payload?.payload?.event?.start_time ?? '';

    console.info('[calendly-webhook] Event:', eventType, '| Email:', email);

    if (eventType !== 'invitee.created') {
      return NextResponse.json({ received: true, skipped: true });
    }

    await forwardToCRM({ name, email, scheduledAt });

    return NextResponse.json({ received: true, success: true });
  } catch (err) {
    console.error('[calendly-webhook] Fehler:', err);
    return NextResponse.json({ error: 'Webhook-Fehler' }, { status: 500 });
  }
}

async function forwardToCRM(data: {
  name: string;
  email: string;
  scheduledAt: string;
}) {
  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;

  if (!crmWebhookUrl) {
    console.warn('[calendly-webhook] CRM_WEBHOOK_URL fehlt – CRM-Weiterleitung deaktiviert.');
    console.info('[calendly-webhook] CRM-Daten (dev):', data);
    return;
  }

  const res = await fetch(crmWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'calendly',
      name: data.name,
      email: data.email,
      scheduled_at: data.scheduledAt,
      tags: ['call-booked', 'klawflow-lead'],
    }),
  });

  if (!res.ok) {
    console.error('[calendly-webhook] CRM-Weiterleitung fehlgeschlagen:', res.status);
  }
}
