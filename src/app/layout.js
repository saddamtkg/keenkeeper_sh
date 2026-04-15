import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProvider from '@/context/AppProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'KeenKeeper - Keep Your Friendships Alive',
  description:
    'Track and maintain your meaningful friendships with ease. Log interactions, set goals, and stay connected with the people who matter most.',
};

export default function RootLayout({ children }) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" richColors />
        </AppProvider>
      </body>
    </html>
  );
}
