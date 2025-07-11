'use client';

import { useEffect } from 'react';
import './globals.scss';
// Remove the import for govuk-frontend.min.css as it's now included in globals.scss
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.body.className +=
      ' js-enabled' +
      ('noModule' in HTMLScriptElement.prototype
        ? ' govuk-frontend-supported'
        : '');

    import('./govuk-frontend.min.js').then(({ initAll }) => {
      initAll();
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>
          GOV.UK - The best place to find government services and information
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#73b3ec" />
        <link
          rel="icon"
          sizes="48x48"
          href="/assets/rebrand/images/favicon.ico"
        />
        <link
          rel="icon"
          sizes="any"
          href="/assets/rebrand/images/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="mask-icon"
          href="/assets/rebrand/images/govuk-icon-mask.svg"
          color="#1d70b8"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/rebrand/images/govuk-icon-180.png"
        />
        <link rel="manifest" href="/assets/rebrand/manifest.json" />
      </head>
      <body className="govuk-template__body govuk-body">
        <Header />
        <div className="content-wrapper govuk-width-container">
          <main className="govuk-main-wrapper" id="main-content">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
