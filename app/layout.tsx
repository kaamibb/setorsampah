import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";


export const metadata: Metadata = {
  title: "Setor Sampah",
  description: "##LessPlasticMoreLife",
};


export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}