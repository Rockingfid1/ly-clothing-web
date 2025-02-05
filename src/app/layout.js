import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "./fonts/Pallmervallerin.ttf",
  display: "swap",
});

export const metadata = {
  title: "LY Clothing",
  description: "Find what defines you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
