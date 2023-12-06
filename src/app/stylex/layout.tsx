import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StyleX",
  description: "StyleX Benchmark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
