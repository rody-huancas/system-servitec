export const CardService = ({ image, title, description }) => {
  return (
    <>
      <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 bg-indigo-500 p-5">
            <img src={image} alt={title} />
          </div>
          <h4 className="font-semibold text-center text-xl text-dark mb-3">
            {title}
          </h4>
          <p className="text-body-color text-justify">{description}</p>
        </div>
        <a
          href="#"
          className="w-1/2 py-3 text-center text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-800 transition-colors"
        >
          Contáctame
        </a>
      </div>
    </>
  );
};
