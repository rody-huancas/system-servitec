export const CardService = ({ image, title, description }) => {
  return (
    <>
      <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 flex flex-col items-center">
        <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 bg-indigo-500 p-5">
          <img src={image} alt={title} />
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">{title}</h4>
        <p className="text-body-color text-justify">{description}</p>
        <a href="#" className="text-start">
          Contáctame
        </a>
      </div>
    </>
  );
};
