import { Providers } from "./providers";
import { Urbanist } from "next/font/google";

import type { Metadata } from "next";

import "../styles/globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evangelia - Home Page",
  description: "Home page of Evangealia's Umbrella Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
