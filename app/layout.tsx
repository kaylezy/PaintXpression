import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paint Xpression and Interiors",
  description: "Paint Xpression and Interiors is a design studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Header component
  const header = (
    <header className="p-4 sm:p-2 flex items-center justify-between gap-4 border-b-2">
      {/* logo section */}
      <div>
        <Link href="/">
          <Image
            src="/assets/logo1.png"
            alt="Paint Xpression"
            width={200}
            height={200}
            className="w-56"
            priority
          />
        </Link>
      </div>
      {/* Link section */}
      <div>
        <Navbar />
      </div>
      {/* button section */}
      <button className="primary-btn">Get Started</button>
    </header>
  );

  //Footer component
  const footer = (
    <footer className="bg-gray-900 text-white">
      <p className="text-center text-sm font-semibold border-t-2 pt-5 mb-5">
        {" "}
        &copy; 2024 Paint Xpression and Interiors. All right reserved
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1500px] mx-auto text-sm sm:text-base min-h-screen flex flex-col`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
