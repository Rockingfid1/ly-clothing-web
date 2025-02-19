import localFont from "next/font/local";
import "./globals.css";
import GlobalLayoutProvider from "../lib/store/GlobalLayoutProvider";

const myFont = localFont({
  src: [
    {
      path: "../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "../fonts/PlayfairDisplay-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "LY Clothing",
  description: "Find what defines you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className} suppressHydrationWarning>
        <GlobalLayoutProvider>{children}</GlobalLayoutProvider>
      </body>
    </html>
  );
}
