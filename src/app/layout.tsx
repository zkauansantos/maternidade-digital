import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const sora = Sora({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Maternidade Digital',
  description: 'A maternidade que você sempre sonhou',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full w-full">
      <body className={`w-full h-full ${sora.className}`}>
        {children}
      </body>
    </html>
  );
}
