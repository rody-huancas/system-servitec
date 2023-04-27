import React from "react";

export const Card = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-default">
        <img
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Lorem ipsum dolor sit amet consectetur.
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            necessitatibus facere! Quis, odio? Iste, excepturi!
          </p>
          <a
            href="#"
            className="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saber Más
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
