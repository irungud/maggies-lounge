import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import Copyright from "@/components/Copyright";
import Topbar from "@/components/Topbar";

const poppinsSans = Poppins({
  variable: "--font-poppins",
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
      <body className={`${poppinsSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Subscription />
        <Footer />
        <Copyright />
        </body>
    </html>
  );
}
