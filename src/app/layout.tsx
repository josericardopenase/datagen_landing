import "./globals.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from "@/components/Header";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


    return (
        <html lang="en" className="scroll-smooth">
        <body className="bg-dark-700">
        <Header></Header>
        <main className="pt-24">{children}</main>
        <footer className="flex-col gap-8 text-center md:text-left md:flex-row bg-dark-700 w-full p-4 flex justify-between items-center">
            <div>
                <img className="w-[110px]" src={"/Logo.png"} />
                <p className="text-xs text-light-100">© 2024 Bilern, S.L</p>
            </div>
            <div>
                <p className="text-xs text-light-100 mb-3">Siguenos en</p>
                <div className="flex gap-5">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/people/Bilern/61557437200399/"
                        className="text-light-100 hover:text-brand_secondary-500 cursor-pointer"
                    >
                        <FaFacebook size={22}></FaFacebook>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/bilern_team/?hl=es"
                        className="text-light-100 hover:text-brand_secondary-500 cursor-pointer"
                    >
                        <FaInstagram size={22}></FaInstagram>
                    </a>
                    <a
                        target="_blank"
                        href="https://es.linkedin.com/company/bilern"
                        className="text-light-100 hover:text-brand_secondary-500 cursor-pointer"
                    >
                        <FaLinkedin size={22}></FaLinkedin>

                    </a>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
