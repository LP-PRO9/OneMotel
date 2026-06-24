import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
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
    </html>
  );
}
