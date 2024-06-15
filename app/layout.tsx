"use client";
import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Spendtify App</title>
      </head>
      <AuthProvider>
        <body className="bg-black text-foreground min-h-screen flex flex-col items-center w-full">
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
