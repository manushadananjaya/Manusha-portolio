import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manusha Dananjaya",
  description: "Manusha Dananjaya's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      
        <body className={inter.className}>{children}</body>
      {/* </TracingBeam> */}
    </html>
  );
}
