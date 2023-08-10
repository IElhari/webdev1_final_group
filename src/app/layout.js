import Nav from '@/components/NavComponent/Nav';
import './globals.css';
import Footer from '@/components/FooterComponent/Footer';
import Script from 'next/script';
import Link from 'next/link';

export const metadata = {
  title: 'Elite Fitness Gym',
  description: 'Experience elite training and world-class gym facilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"gym-body"}>
        <Nav />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
              async
            />
            <Script strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
