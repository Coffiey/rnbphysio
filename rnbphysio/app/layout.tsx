import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";

const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "RNB Physio",
  description: "Providing expert neuro physiotherapy and rehabilitation services supporting people with neurological conditions to improve mobility, manage symptoms, and enhance quality of life.",
  icons: {
    icon: '/logo/favicon.ico',
    apple: '/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="relative">
        <Background />
        <NavBar />
        {children}
      </body>
    </html>
  );
}