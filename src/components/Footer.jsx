export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="max-w-[1200px] mx-auto my-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href="#" target="_blank" className="hover:underline">
            SERVITEC
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </>
  );
};
