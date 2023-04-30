export const ContactForm = () => {
  return (
    <>
      <form>
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Ingrese su nombre completo"
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="max-h-[90px] min-h-[70px] form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Ingrese su mensaje"
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-4 bg-indigo-600 text-white font-bold text-md leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </>
  );
};
