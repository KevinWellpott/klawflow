import { Metadata } from 'next';
import ImpressumContent from './ImpressumContent';

export const metadata: Metadata = {
  title: 'Impressum – Klawflow',
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
