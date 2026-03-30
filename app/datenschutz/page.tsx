import { Metadata } from 'next';
import DatenschutzContent from './DatenschutzContent';

export const metadata: Metadata = {
  title: 'Datenschutz – Klawflow',
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
