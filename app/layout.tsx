import type { Metadata } from "next";
import { Source_Code_Pro, Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ 
  subsets: ["latin"], 
  weight: ['300', '400', '700', '900'],
  variable: '--font-source-code'
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  variable: '--font-montserrat'
});

const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700', '900'],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Mohamed Hashim | Full Stack Developer",
  description: "Full Stack Web Developer specializing in React, Next.js, Node.js and modern web technologies. View my portfolio, projects, and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} ${montserrat.variable} ${raleway.variable} bg-background`}>
      <body className={`${sourceCodePro.className} antialiased`}>{children}</body>
    </html>
  );
}
