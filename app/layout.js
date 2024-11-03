import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
});


export const metadata = {
  title: "Aftab",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
