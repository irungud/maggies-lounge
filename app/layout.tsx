import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import Copyright from "@/components/Copyright";
import Topbar from "@/components/Topbar";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Maggies Nest Bar and Restaurant",
  description: "Restaurant, Bar and Accomodation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased relative bg-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
