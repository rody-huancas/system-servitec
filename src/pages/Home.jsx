import React from "react";
import { Card } from "../components/Card";
import { Card2 } from "../components/Card2";

export const Home = () => {
  return (
    <>
      {/* Bienvenida */}
      <div className="">
        <div className="pb-20">
          <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96 rounded-xl">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h1 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white text-center">
                    Bienvenidos a SERVITEC
                  </h1>
                </div>
                <div className="mt-6 mx-2 md:mx-0 text-center">
                  <p className="lg:text-lg md:text-base leading-6 text-sm text-white subtitulo">
                    Somos una empresa dedicada al rubro de la tecnología, <br />
                    con más de 5 años de experiencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  40+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Clientes Felices
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  540+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Proyectos Completados
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  30
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Trabajadores expertos
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow-md rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                  25+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                  Certificados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-5xl font-black leading-10 pb-5 text-indigo-700">
        Nuestros Servicios
      </h3>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        <Card />
        <Card />
        <Card2 />
      </div>
    </>
  );
};
