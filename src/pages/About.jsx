import { FaTasks, FaUsers } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { AboutDescription } from "../components/about/AboutDescription";
import { AboutStatement } from "../components/about/AboutStatement";
import { AboutCards } from "../components/about/AboutCards";

export const About = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto py-9 lg:py-0 px-4 lg:px-0">
        {/* Description */}
        <AboutDescription
          title="¿Quienes Somos?"
          subtitle="Líderes en soluciones tecnológicas personalizadas."
          desciption="En Servitec, somos líderes en soluciones tecnológicas personalizadas para empresas y particulares. Con especialización en instalación de Mikrotik, configuración de OLT y software a medida, ofrecemos configuraciones expertas, implementaciones fluidas y resultados excepcionales. Nuestro equipo altamente capacitado se compromete a maximizar el rendimiento y la seguridad de tu infraestructura de red. Confía en nosotros para impulsar tu éxito digital."
        />

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          {/* Misión */}
          <AboutStatement
            titleMision="Nuestra Misión"
            descriptionMision="Nuestra misión en Servitec es proporcionar soluciones tecnológicas innovadoras y personalizadas que impulsen el éxito de nuestros clientes. Nos esforzamos por ser líderes en el sector, brindando servicios de instalación, configuración y optimización de redes y software, con un enfoque en la excelencia, la eficiencia y la satisfacción del cliente. Trabajamos con dedicación y profesionalismo para superar las expectativas y ser el socio tecnológico confiable que nuestros clientes necesitan para alcanzar sus objetivos empresariales."
            titleVision="Nuestra Visión"
            descriptionVision="En Servitec, nuestra visión es convertirnos en el referente líder en soluciones tecnológicas a nivel nacional. Buscamos ser reconocidos por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Nos esforzamos por estar a la vanguardia de las últimas tecnologías y tendencias del sector, ofreciendo soluciones personalizadas que impulsen el crecimiento y el éxito de nuestros clientes. Aspiramos a establecer relaciones a largo plazo, basadas en la confianza y la colaboración, para ser el socio estratégico confiable en el ámbito tecnológico. Nuestra visión es ser reconocidos como un equipo altamente competente y apasionado, capaz de superar las expectativas y marcar la diferencia en el mundo de la tecnología."
          />

          {/* Cards */}
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* Card team */}
              <AboutCards
                Icon={FaTasks}
                title="Diseño de soluciones"
                description="Trabajamos en equipo para diseñar soluciones tecnológicas a medida. Utilizamos nuestra experiencia y conocimientos para crear configuraciones personalizadas que cumplan con los objetivos específicos de cada cliente."
              />
              {/* Card Task */}
              <AboutCards
                Icon={GiTeamIdea}
                title="Análisis y consultoría"
                description="Nos reunimos para analizar las necesidades y requerimientos de nuestros clientes, ofreciendo asesoramiento y recomendaciones expertas. Realizamos evaluaciones detalladas para comprender a fondo los desafíos y oportunidades de cada proyecto."
              />

              {/* Card Talks */}
              <AboutCards
                Icon={FaUsers}
                title="Capacitación y soporte"
                description="Brindamos capacitación y soporte continuo a nuestros clientes. Nos aseguramos de que comprendan plenamente las soluciones implementadas y estén equipados con el conocimiento necesario para utilizarlas de manera efectiva."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
