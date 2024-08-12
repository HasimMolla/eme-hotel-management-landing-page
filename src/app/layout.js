import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Hotel Management Certificate Courses in kolkata - - EME Academy",
  description:
    "Discover Hotel Management certificate courses in kolkata. Start your journey towards a rewarding career in the hospitality industry. Find top-notch training programs near you!",
  keywords: [
    "Best Hotel Management Certificate Courses in kolkata",
    "Hotel Management Certificate Courses in kolkata",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
