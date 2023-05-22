import React from "react";

export const AboutText = ({ title, description }) => {
  return (
    <>
      <div className="mb-10">
        <h3 className="font-bold lg:text-4xl text-3xl lg:leading-4 leading-7 text-indigo-700">
          {title}
        </h3>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-[100%] text-justify">
          {description}
        </p>
      </div>
    </>
  );
};
