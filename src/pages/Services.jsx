import { CardService } from "../components/services/CardService";

export const Services = () => {
  return (
    <>
      <section className="flex justify-center cursor-default">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-xl text-primary mb-2 block">
                  Nuestros Servicios
                </span>
                <h2 className="font-extrabold text-indigo-600 text-3xl sm:text-4xl md:text-5xl text-dark mb-4">
                  ¿Qué ofrecemos?
                </h2>
                <p className="text-base text-body-color">
                  Nuestros servicios incluyen instalación de redes,
                  configuración de sistemas y software a medida para impulsar tu
                  éxito tecnológico.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
              <CardService
                image="./images/info.svg"
                title="Configuración de  Servidor MikroTik."
                description="Optimizamos tu red con nuestra configuración experta de servidores MikroTik para garantizar un rendimiento óptimo y una conectividad confiable."
              />
              <CardService
                image="./images/info.svg"
                title="Calidad de Servicio MikroTik - QoS."
                description="Mejora el rendimiento de tu red con nuestra implementación de Calidad de Servicio (QoS) MikroTik, garantizando una priorización eficiente."
              />
              <CardService
                image="./images/info.svg"
                title="Enrutamiento Estático Y Dinámico."
                description="Facilitamos la conectividad de tu red con enrutamiento estático y dinámico, optimizando el flujo de datos y asegurando una comunicación eficiente"
              />
              <CardService
                image="./images/info.svg"
                title="Balanceo de diferentes velocidades."
                description="Optimizamos la conectividad de tu red con enrutamiento y balanceo de velocidades para un rendimiento óptimo, eficiente y confiable."
              />
              <CardService
                image="./images/info.svg"
                title="Balanceo de lineas con PPPOE."
                description="Maximiza la eficiencia de tu red mediante el balanceo de líneas con PPPOE, asegurando una distribución equilibrada del tráfico para un rendimiento óptimo."
              />
              <CardService
                image="./images/info.svg"
                title="Backup Automático Mikrotik."
                description="Protege tus configuraciones de red con nuestro backup automático MikroTik, garantizando la disponibilidad y seguridad de tus datos."
              />
              <CardService
                image="./images/info.svg"
                title="Configuración Firewall Avanzado."
                description="Mejora la seguridad de tu red con nuestra configuración avanzada de firewall, protegiendo tus sistemas contra amenazas y garantizando un entorno seguro."
              />
              <CardService
                image="./images/info.svg"
                title="Configuración Balanceo PCC."
                description="Maximiza la eficiencia de tu red con nuestra configuración de balanceo PCC, asegurando una distribución equilibrada del tráfico para un rendimiento óptimo"
              />
              <CardService
                image="./images/info.svg"
                title="Queue Trees + Simple Queues + PCQ."
                description="Mejora el control del ancho de banda en tu red con nuestras configuraciones de Queue Trees, Simple Queues y PCQ"
              />
              <CardService
                image="./images/info.svg"
                title="Configuración OSPF."
                description="Mejora la eficiencia y la escalabilidad de tu red con nuestra configuración OSPF, garantizando una comunicación fluida y un enrutamiento dinámico."
              />
              <CardService
                image="./images/info.svg"
                title="Servidor PPPoE."
                description="Administramos servidores PPPoE para una autenticación segura y eficiente de clientes en tu red."
              />
              <CardService
                image="./images/info.svg"
                title="Servidor VPN L2TP+IPsec."
                description="Implementamos y gestionamos servidores VPN L2TP+IPsec, brindando una conexión segura y confiable para acceder a tu red de forma remota."
              />
              <CardService
                image="./images/info.svg"
                title="Configuración Acceder Remotamente."
                description="Facilitamos la configuración para acceder de forma remota a tu red de manera segura y confiable, garantizando una conexión fácil y protegida."
              />
              <CardService
                image="./images/info.svg"
                title="Suspensión de Servicio."
                description="Brindamos servicios de suspensión de manera temporal de forma segura, en caso de mantenimiento o situaciones excepcionales"
              />
              <CardService
                image="./images/info.svg"
                title="Configuración  de OLT."
                description="Realizamos configuraciones expertas de OLT, trabajando con marcas líderes como V.SOL, ZTE y HUAWEI, para optimizar el rendimiento de tu red de fibra óptica."
              />
              <CardService
                image="./images/info.svg"
                title="Configuración de  Servidor MikroTik."
                description="Configuramos servidores MikroTik de manera experta, brindando una infraestructura robusta y segura para maximizar el rendimiento de tu red y optimizar la conectividad."
              />
              <CardService
                image="./images/info.svg"
                title="Configuración de  Servidor MikroTik.ddd"
                description="Realizamos configuraciones especializadas en servidores MikroTik, brindando una infraestructura sólida y segura para maximizar el rendimiento y la conectividad de tu red"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
