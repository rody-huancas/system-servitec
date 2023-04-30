import React from "react";

export const AboutCards = ({ Icon, title, description }) => {
  return (
    <>
      <div className="flex items-center p-4 shadow-md">
        <div className="mr-6">
          <Icon className="text-4xl text-indigo-600" />
        </div>
        <div className="">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
            {title}
          </p>
          <p className="mt-2 font-normal text-base leading-6 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
