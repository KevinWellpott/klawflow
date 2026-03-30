import { Metadata } from 'next';
import { verifyConfirmationToken } from '@/lib/auth';
import WartelisteContent from './WartelisteContent';

export const metadata: Metadata = {
  title: 'Du bist dabei! – Klawflow',
  robots: { index: false },
};

interface SearchParams {
  email?: string;
  token?: string;
  ts?: string;
}

export default async function WartelistePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const email = params.email ?? '';
  const token = params.token ?? '';
  const ts = Number(params.ts ?? 0);

  const isVerified = email && token && ts
    ? verifyConfirmationToken(email, token, ts)
    : false;

  return (
    <WartelisteContent
      email={email}
      isVerified={isVerified}
      hasParams={!!(email && token && ts)}
    />
  );
}
