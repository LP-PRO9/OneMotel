import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: {
    default: "One Motel — Viva Momentos Inesquecíveis",
    template: "%s — One Motel",
  },
  description:
    "O motel mais moderno de Boa Vista. Suítes com hidromassagem, piscina e conforto premium. Aberto 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V3GQH51HLE"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-V3GQH51HLE');`}
      </Script>
    </html>
  );
}
