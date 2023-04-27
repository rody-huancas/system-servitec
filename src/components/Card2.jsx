import { AiFillCheckCircle, AiOutlineArrowRight } from "react-icons/ai";

export const Card2 = () => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Plan Estándar
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">S/.</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /Mes
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              2 team members
            </span>
          </li>
          <li className="flex space-x-3">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              20GB Cloud storage
            </span>
          </li>
          <li className="flex space-x-3">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Integration help
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-base font-normal leading-tight text-gray-500">
              Sketch Files
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-base font-normal leading-tight text-gray-500">
              API Access
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-base font-normal leading-tight text-gray-500">
              Complete documentation
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <AiFillCheckCircle className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="text-base font-normal leading-tight text-gray-500">
              24×7 phone & email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center gap-3 w-full text-center uppercase font-medium"
        >
          Comprar Plan
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};
