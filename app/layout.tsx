import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata: Metadata = {
  title: 'SASMATIX Solutions - Empowering Talent. Accelerating Business.',
  description:
    'SASMATIX Solutions - Recruitment, Staffing, Corporate Training and Interview Preparation in Chennai.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
