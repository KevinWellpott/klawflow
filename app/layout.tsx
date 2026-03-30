import type { Metadata } from 'next';
import { ColorModeScript } from '@chakra-ui/react';
import './globals.css';
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Klawflow – Mehr Revenue aus deinen bestehenden Kunden',
  description:
    'Klawflow automatisiert dein Upselling & Cross-Selling mit KI-gestützten Flow-Templates – ohne Agentur, ohne Technik-Stress.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <ColorModeScript initialColorMode="dark" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <main style={{ paddingTop: '64px' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
