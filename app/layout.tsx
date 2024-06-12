import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ContextProvider from '@/context/Context'
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
    <html lang="fa" className="overflow-x-hidden text-neutral-black select-none">
      <body>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
