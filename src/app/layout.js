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
