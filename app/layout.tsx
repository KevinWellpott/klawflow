import type { Metadata } from 'next';
import { ColorModeScript } from '@chakra-ui/react';
import './globals.css';
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Klawflow – Mehr Umsatz aus Klaviyo, ohne Agentur',
  description:
    'Warteliste: Automatisierte Flows, smarte Segmentierung und ein Klaviyo-Dashboard für DTC-Brands mit 60k–5M € Umsatz.',
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
        <div className="page-bg-layer" aria-hidden />
        <div className="page-glass-layer" aria-hidden />
        <Providers>
          <div className="page-root">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
