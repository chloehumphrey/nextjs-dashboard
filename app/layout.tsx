// This is the root layout component that wraps the entire application.
// Any UI components that are shared across multiple pages should be placed here.

// Add global styles by importing the global.css file
import "@/app/ui/global.css";
// Add fonts by importing the fonts file
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
