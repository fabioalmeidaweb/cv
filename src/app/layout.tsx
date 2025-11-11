import { Metadata } from 'next';
import Script from 'next/script';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fabio Almeida | Resume',
  description: "English version of Fabio Almeida's Curriculum",
  icons: {
    icon: 'https://fabioalmeidaweb.github.io/cv/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLocalhost = process.env.NODE_ENV === 'development';
  console.log(isLocalhost);
  return (
    <html lang="en" className="print:text-[14px]">
      {!isLocalhost && (
        <head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=-M04VNLM5F1`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M04VNLM5F1');
          `}
          </Script>
        </head>
      )}
      <body className="print:leading-snug">{children}</body>
    </html>
  );
}
