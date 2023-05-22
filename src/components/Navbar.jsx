import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollEvent = () => {
    setIsScrolled(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full md:fixed md:top-0 bg-white z-50 ${
          isScrolled && "md:shadow-lg"
        }`}
      >
        <div className="max-w-[1200px] h-[100px] mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <Link to="/" className="w-[150px] md:w-[120px]">
            <img src="/images/logo.png" alt="Logo Servitec" />
          </Link>
          <nav className="flex items-center gap-4 justify-center">
            <Link
              to="/"
              className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              to="/services"
              className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Servicios
            </Link>
            <Link
              to="/contact"
              className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4 py-3 md:py-0">
            <a
              href="https://www.facebook.com/daniel.vasquezguevara.79"
              className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-700 transition-colors"
              target="_blank"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51963557795"
              className="p-2 bg-green-500 rounded-full text-white hover:bg-green-700 transition-colors"
              target="_blank"
            >
              <RiWhatsappLine />
            </a>
            <a
              href="https://www.instagram.com/daniels142603/"
              className="p-2 bg-pink-500 rounded-full text-white hover:bg-pink-700 transition-colors"
              target="_blank"
            >
              <RiInstagramLine />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
