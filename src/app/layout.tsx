import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProvider from "@/components/providers/react-query-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
})

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans"
})

const barriecito = localFont({
  src: "../assets/fonts/Barriecito-Regular.ttf",
  variable: "--font-barriecito"
})

export const metadata = {
  title: {
    default: "Next Playground",
    template: "%s | Next Playground",
  },
  description: "Project Next.js Untuk belajar",

  openGraph: {
    title: "My Website",
    description: "Belajar digital marketing & teknologi",
    url: "https://mywebsite.com",
    siteName: "My Website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${barriecito.variable} antialiased`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
