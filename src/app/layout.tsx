import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eda Beyter",
  description:
    "Eda Beyter — Model UN logistics lead, entrepreneurship club president, and professional swimmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
