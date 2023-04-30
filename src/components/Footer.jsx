import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="max-w-[1200px] mx-auto my-10">
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {year}{" "}
          <Link to="/" className="hover:underline">
            SERVITEC
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </>
  );
};
