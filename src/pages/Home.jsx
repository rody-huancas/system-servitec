import { Welcome } from "../components/home/Welcome";
import { Cards } from "../components/home/Cards";

export const Home = () => {
  return (
    <>
      {/* Bienvenida */}
      <Welcome />

      <h3 className="text-5xl font-black leading-10 pb-5 text-indigo-700">
        Nuestros Servicios
      </h3>
      {/* Cards */}
      <Cards />
    </>
  );
};
