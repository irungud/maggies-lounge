import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
      <body className={`antialiased relative bg-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
