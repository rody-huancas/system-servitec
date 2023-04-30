import React from "react";
import { ItemCard } from "../ItemCard";

export const Welcome = () => {
  return (
    <>
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

        {/* Cards info */}
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
            <ItemCard number={"40+"} description={"Clientes Satisfechos"} />
            <ItemCard number={"30+"} description={"Trabajos Realizados"} />
            <ItemCard number={"10+"} description={"Servicios disponibles"} />
            <ItemCard number={"10"} description={"Trabajadores"} />
          </div>
        </div>
      </div>
    </>
  );
};
