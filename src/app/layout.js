import { Inter } from "next/font/google";
import "./globals.css";

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
        <footer>Footer</footer>
      </body>
    </html>
  );
}
export default RootLayout;