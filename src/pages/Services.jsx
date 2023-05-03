import { CardService } from "../components/services/CardService";

export const Services = () => {
  return (
    <>
      <section className="flex justify-center cursor-default">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-xl text-primary mb-2 block">
                  Nuestros Servicios
                </span>
                <h2 className="font-extrabold text-indigo-600 text-3xl sm:text-4xl md:text-5xl text-dark mb-4">
                  ¿Qué ofrecemos?
                </h2>
                <p className="text-base text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor animi sequi alias tempora ex neque sed nihil, facere,
                  culpa quaerat omnis cupiditate cum nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
              <CardService
                image="./images/info.svg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris."
              />
              <CardService
                image="./images/info.svg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris."
              />
              <CardService
                image="./images/info.svg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris."
              />
              <CardService
                image="./images/info.svg"
                title="Lorem ipsum dolor sit amet."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
