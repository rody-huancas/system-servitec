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
            email="soporte@correo.com"
            number="+51 921 564 321"
            width=""
          />
          {/* Reportar error */}
          <ContactCard
            Icon={Bug}
            title="Reportar un error"
            email="error@correo.com"
            number="+51 921 564 321"
            width=""
          />
          {/* Solicitar información */}
          <ContactCard
            Icon={Info}
            title="Solicitar información"
            email="info@correo.com"
            number="+51 921 564 321"
            width=""
          />
          {/* Solicitar precios */}
          <ContactCard
            Icon={Price}
            title="Solicitar precios"
            email="precios@correo.com"
            number="+51 921 564 321"
            width="w-4"
          />
        </div>
      </div>
    </>
  );
};
