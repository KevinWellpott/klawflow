import { Metadata } from 'next';
import AGBContent from './AGBContent';

export const metadata: Metadata = {
  title: 'AGB – Klawflow',
};

export default function AGBPage() {
  return <AGBContent />;
}
