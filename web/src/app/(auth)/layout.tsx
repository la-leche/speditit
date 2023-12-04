import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Athentitication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
