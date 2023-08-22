import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="p-10">
                    <Navbar />
                    <main className="mt-10 p-10">{children}</main>
                    <Footer  className="p-10"/>
                </div>
            </body>
        </html>
    );
}
