import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kumkapı Fisch Restaurant | Frischer Fisch in Hamburg",
  description: "Genießen Sie frischen Fisch und authentische mediterrane Küche in einem eleganten Ambiente direkt am Hamburger Hafen. Tradition trifft Moderne.",
  keywords: "Fisch Restaurant, Hamburg, Mediterran, Seafood, Kumkapı, Türkisch, Grill",
  openGraph: {
    title: "Kumkapı Fisch Restaurant | Frischer Fisch in Hamburg",
    description: "Genießen Sie frischen Fisch und authentische mediterrane Küche in einem eleganten Ambiente direkt am Hamburger Hafen.",
    images: ["/images/restaurant-signage.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="icon" href="/images/logo-icon.png" />
        <link rel="apple-touch-icon" href="/images/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
