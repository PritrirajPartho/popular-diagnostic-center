import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "popular-diagnostic-center",
  description: "popular-diagnostic-center",
};

 const RootLayout  = ({ children }) =>{
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>Home</nav>
            {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
export default RootLayout;