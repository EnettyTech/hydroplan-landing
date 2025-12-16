import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Hydroplan is a personal hydration tracking companion that helps you track your daily water intake effortlessly. Set goals, get reminders, and visualize your progress to maintain optimal hydration throughout the day."
      />
      <meta
        name="keywords"
        content="Hydroplan, hydration tracking, water intake, health tracking"
      />
      <meta name="author" content="Hydroplan" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <title>Hydroplan: Personal Hydration Companion</title>
      <Head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17649975027"
        />

        <Script>
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'AW-17649975027');
          `}
        </Script> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
