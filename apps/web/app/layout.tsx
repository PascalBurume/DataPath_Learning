import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'DataPath',
  description: 'Data science learning with honest AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning><Providers>{children}</Providers></body>
    </html>
  );
}
