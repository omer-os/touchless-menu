import MainLayout from "@/components/pages/layouts/MainContextWrapper";
import "@styles/globals.css";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "touchless menu",
  description: "touchless menu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
