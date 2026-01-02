import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";


export const metadata = {
  title: "My Website",
  description: "Company Website",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>

        <main>{children}</main>
 <BackToTop/>
 
<Footer/>
        
      </body>
    </html>
  );
}
