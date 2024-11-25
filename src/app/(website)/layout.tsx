import "@/app/globals.css";
import localFont from 'next/font/local'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your House",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body>
        {children}       
      </body>
    </html>
  );
}
