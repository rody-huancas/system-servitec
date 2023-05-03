import { ContactForm } from "../components/contactme/ContactForm";
import { ContactGroupCards } from "../components/contactme/ContactGroupCards";

export const Contact = () => {
  const imageUrl =
    "https://img.freepik.com/vector-gratis/particula-tecnologia-abstracta-realista-fondo_23-2148431735.jpg?w=996&t=st=1682827177~exp=1682827777~hmac=76904ea8ce99312cec32c92d8b60f5249bdfd5628398f860fdec3705a637c2cd";

  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="h-72 relative overflow-hidden rounded-2xl">
            <img
              src={imageUrl}
              alt="Tecnología abstracta en un fondo realista"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 -mt-[100px] backdrop-blur-[30px] bg-white">
              <h2 className="text-5xl text-center font-black leading-10 pb-5 text-gray-700 ">
                Contáctanos
              </h2>
              <div className="flex flex-wrap p-10">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                  <ContactForm />
                </div>
                <ContactGroupCards />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
