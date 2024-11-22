import "@/app/globals.css";
import localFont from 'next/font/local'
import type { Metadata } from "next";

const gothamPro = localFont({
  src: '../../assets/fonts/GothamPro.ttf',
  display: 'swap',
  variable: '--font-gotham', 
})
const anticDidone = localFont({
  src: '../../assets/fonts/AnticDidoneRegular.ttf',
  display: 'swap',
  variable: '--font-antic',
})

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
      <body className={`${gothamPro.variable} ${anticDidone.variable}`}>
        {children}       
      </body>
    </html>
  );
}
