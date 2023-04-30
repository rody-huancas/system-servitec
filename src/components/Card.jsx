import { AiOutlineArrowRight } from "react-icons/ai";

export const Card = ({ url, title, description }) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-default">
        <img className="rounded-t-lg" src={url} alt={title} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
          <a
            href="#"
            className="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
            <AiOutlineArrowRight className="w-4 h-4 ml-2 -mr-1" />
          </a>
        </div>
      </div>
    </>
  );
};
