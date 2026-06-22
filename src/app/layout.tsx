import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mis Compromisos',
  description: 'Compromisos personales con la empresa para este periodo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark">
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <div className="isolate flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
