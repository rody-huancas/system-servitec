import { Card } from "../Card";

export const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        <Card
          url="/home/Captura.PNG"
          title="Instalación de Mikrotik"
          description="Nuestra instalación de Mikrotik ofrece soluciones eficientes y confiables para optimizar tu red. Obtén una configuración experta y personalizada que maximizará el rendimiento y la seguridad de tu infraestructura de red."
        />
        <Card
          url="/home/olt.png"
          title="Configuración de OLT"
          description="Nuestro servicio de configuración de OLT está diseñado para brindarte una gestión de red avanzada y un rendimiento óptimo. Aprovecha nuestro conocimiento especializado para optimizar tus operaciones y mejorar la conectividad en tu red de fibra óptica."
        />
        <Card
          url="/home/software.png"
          title="Instalación de Software"
          description="Nuestra instalación de software a medida te proporciona soluciones adaptadas a tus necesidades específicas. Experimenta una implementación fluida, rápida y sin complicaciones con el apoyo de nuestro equipo de expertos en tecnología."
        />
      </div>
    </>
  );
};
