import { Geist, Geist_Mono, Leckerli_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const leckerli = Leckerli_One({
  subsets: ['latin'],
  weight: '400',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "LBL Prints",
  description: "We print your future!",
  keywords: ['Next.js', 'SEO', 'Thumbnail', 'Tutorial'],
  authors: [{ name: 'Mebhevy' }],
  viewport: 'width=device-width, initial-scale=1.0',

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "LBL Prints",
    description: "We print your future!",
    url: 'https://lbl.mebhevy.com',
    siteName: 'LBLPrints',
    images: [
      {
        url: '/images/thumbnail.png', // imaginea ta
        width: 1200,
        height: 630,
        alt: 'World Wide Meb - Mebhevy',
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: '/images/thumbnail.png',
    title: 'LBL Prints',
    description: 'We print your future!',
    images: ['/images/thumbnail.png'],
    site: 'https://lbl.mebhevy.com',
    creator: 'Mehbevy',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leckerli.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
