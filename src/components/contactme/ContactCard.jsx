export const ContactCard = ({ Icon, title, email, number, width }) => {
  return (
    <>
      <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
        <div className="flex items-start">
          <div className="shrink-0">
            <div className="p-4 bg-indigo-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
              <img src={Icon} alt={title} className={width} />
            </div>
          </div>
          <div className="grow ml-6">
            <p className="font-bold mb-1">{title}</p>
            <p className="text-gray-500">{email}</p>
            <p className="text-gray-500">{number}</p>
          </div>
        </div>
      </div>
    </>
  );
};
