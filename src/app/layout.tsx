import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import AmhpLogo from "../../public/images/amhplogo.png";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMHP - Associação dos Médicos de Hospitais Privados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <header className="flex justify-between items-center gap-4 p-4 fixed top-0 left-0 w-screen shadow-md">
          <Link href="/">
            <Image
              src={AmhpLogo}
              alt="AMHP logo"
              className="w-32 h-9 md:w-40 md:h-11"
            />
          </Link>

          <nav className="grow flex justify-evenly md:justify-end md:gap-4">
            <Link
              href="/news"
              className={
                "px-2 rounded-sm text-amhp-dark-100 hover:bg-amhp-dark-100/5 text-lg ease-out duration-300"
              }
            >
              Notícias
            </Link>
            <Link
              href="/agreement"
              className="px-2 rounded-sm text-amhp-dark-100 hover:bg-amhp-dark-100/5 text-lg ease-out duration-300"
            >
              Convênios
            </Link>
          </nav>
        </header>

        <div className="mt-[76px]">{children}</div>
      </body>
    </html>
  );
}
