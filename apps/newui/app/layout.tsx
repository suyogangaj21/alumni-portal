import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import Provider from "@/context/SessionProviders";
import { MyUserContextPorvider } from "@/hooks/useUser";
const urbanist = Urbanist({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getServerSession();

  return (
    <html lang="en" className="w-full h-full">
      <body className={urbanist.className}>
        <Provider session={session}>
          <MyUserContextPorvider>{children}</MyUserContextPorvider>
        </Provider>
      </body>
    </html>
  );
}
