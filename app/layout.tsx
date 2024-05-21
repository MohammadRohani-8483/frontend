import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Chat App",
  description: "This is best app",
};

type Props = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
