import Footer from "@/component/Footer";
import "./globals.css";
import Navbar from "@/component/Navbar";

export const metadata = {
  title: "Growvy - Maximize Business Efficiency",
  description: "Growvy website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
