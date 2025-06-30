import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ARP Electric Solutions',
  description: 'Your trusted partner for high-quality electrical components and solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
