import React from "react";

export const AboutDescription = ({ title, subtitle, desciption }) => {
  return (
    <>
      <div className="flex items-center lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="text-5xl font-black leading-10 pb-5 text-indigo-700 text-center sm:text-start">
            {title}
          </h2>
          <p className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-center sm:text-start">
            {subtitle}
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 text-justify">
            {desciption}
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block w-full rounded-md"
            src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=2000"
            alt="people discussing on board"
          />
        </div>
      </div>
    </>
  );
};
