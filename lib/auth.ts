import { createHmac, timingSafeEqual } from 'crypto';

const SECRET = process.env.CONFIRMATION_SECRET ?? 'dev-secret-klawflow-change-in-production';

const TOKEN_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 Stunden

export function generateConfirmationToken(email: string): { token: string; ts: number } {
  const ts = Date.now();
  const token = createHmac('sha256', SECRET)
    .update(`${email}:${ts}`)
    .digest('hex');
  return { token, ts };
}

export function verifyConfirmationToken(
  email: string,
  token: string,
  ts: number
): boolean {
  if (Date.now() - ts > TOKEN_MAX_AGE_MS) return false;

  const expected = createHmac('sha256', SECRET)
    .update(`${email}:${ts}`)
    .digest('hex');

  try {
    return timingSafeEqual(Buffer.from(token, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}
