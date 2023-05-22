import Bug from "./images/bug.svg";
import Info from "./images/info.svg";
import Price from "./images/price.svg";
import Medium from "./images/medium.svg";
import { ContactCard } from "./ContactCard";

export const ContactGroupCards = () => {
  return (
    <>
      <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
        <div className="flex flex-wrap">
          {/* Soporte tecnico */}
          <ContactCard
            Icon={Medium}
            title="Soporte técnico"
            email="danielvsquez@gmail.com"
            number="+51 963 557 795"
            width=""
          />
          {/* Reportar error */}
          <ContactCard
            Icon={Bug}
            title="Reportar un error"
            email="danielvsquez@gmail.com"
            number="+51 963 557 795"
            width=""
          />
          {/* Solicitar información */}
          <ContactCard
            Icon={Info}
            title="Solicitar información"
            email="danielvsquez@gmail.com"
            number="+51 963 557 795"
            width=""
          />
          {/* Solicitar precios */}
          <ContactCard
            Icon={Price}
            title="Solicitar precios"
            email="danielvsquez@gmail.com"
            number="+51 963 557 795"
            width="w-4"
          />
        </div>
      </div>
    </>
  );
};
