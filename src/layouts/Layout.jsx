import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto mt-[260px] md:mt-[150px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
