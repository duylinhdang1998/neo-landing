import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/themes/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LinkNeo',
  description: 'Generated by VFM Technology Vietnam',
  keywords: ['business', 'SEO', 'technology', 'VFM'],
  authors: [{ name: 'VFM Technology', url: 'https://vfmtechnology.com' }],
  openGraph: {
    title: 'LinkNeo - Optimize Your Business',
    description: 'Discover the power of LinkNeo for your business growth!',
    url: 'https://linkneo.com',
    siteName: 'LinkNeo',
    images: [
      {
        url: 'https://linkneo.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'LinkNeo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkNeo - Optimize Your Business',
    description: 'Discover the power of LinkNeo for your business growth!',
    images: ['https://linkneo.com/twitter-image.jpg'],
  },
  facebook: {
    admins: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/img/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
