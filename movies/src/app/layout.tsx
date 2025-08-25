

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#181818", color: "white", fontFamily: "Poppins, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
