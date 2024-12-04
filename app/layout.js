import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
// import { cookies } from 'next/headers';
// import { getUser } from '../database/users';
import Footer from './components/footer';
import Header from './components/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Home | Bench My Salary',
  description: 'Upload your salary, check if you are being paid well or not',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
