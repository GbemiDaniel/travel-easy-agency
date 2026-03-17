import type { Metadata } from "next";
import { Volkhov, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-volkhov",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Travel Easy Agency",
  description: "Get started on your exciting journey with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Moved the font variables up here to the html tag!
    <html lang="en" className={`${volkhov.variable} ${poppins.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}