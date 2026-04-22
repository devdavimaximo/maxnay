import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxnay Veterinária | Clínica Veterinária Premium em Balneário Camboriú",
  description:
    "Cuidado veterinário de excelência para o seu pet em Balneário Camboriú. Equipe especializada, estrutura completa e atendimento emergencial. Agende pelo WhatsApp.",
  keywords:
    "veterinária, Balneário Camboriú, clínica veterinária, pet, cão, gato, emergência veterinária",
  openGraph: {
    title: "Maxnay Veterinária | Cuidado Premium para seu Pet",
    description:
      "Equipe veterinária especializada com estrutura completa. Atendimento humanizado em Balneário Camboriú.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased bg-surface overflow-x-hidden">{children}</body>
    </html>
  );
}
