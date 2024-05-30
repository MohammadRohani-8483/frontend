import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat App",
  description: "This is best app",
};

type Props = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="fa" className="overflow-x-hidden text-neutral-black">
      <body>{children}</body>
    </html>
  );
}
