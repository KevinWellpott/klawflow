#	Aufgabe	Aufwand
1	Resend-Account anlegen auf resend.com → API Key erstellen → Domain verifizieren (klawflow.de)	~15 Min
2	.env.local anlegen – .env.local.example kopieren und Werte eintragen (RESEND_API_KEY, RESEND_FROM_EMAIL, CONFIRMATION_SECRET, NEXT_PUBLIC_BASE_URL)	5 Min
3	Absender-Domain in Resend verifizieren (DNS-Einträge für klawflow.de setzen)	~10 Min
4	Calendly-Webhook konfigurieren – in Calendly Dashboard → Integrations → Webhooks → URL: https://deinedomain.de/api/calendly-webhook, Event: invitee.created	10 Min
5	CRM-Webhook-URL eintragen (CRM_WEBHOOK_URL in .env.local) – z.B. Make/Zapier-Webhook, der die Daten ins CRM schreibt	Abhängig vom CRM
6	Erinnerungsmails (nach 12h, 3 Tagen, 7 Tagen) – das geht nicht ohne Backend-Datenbank oder ein Tool wie Make/Zapier + E-Mail-Automation. Empfehlung: Resend Broadcasts oder ein Automation-Tool	Nicos Aufgabe
7	Calendly-URL in CalendlyModal.tsx ersetzen – derzeit Platzhalter https://calendly.com/your-link	1 Min