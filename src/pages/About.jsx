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
          subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            magnam tempora dolor nesciunt perspiciatis beatae saepe praesentium
            culpa? Unde alias asperiores dolore deleniti natus corporis earum
            praesentium dolor nihil consequuntur? Porro omnis laborum ipsa
            voluptate itaque veniam aut mollitia explicabo ipsum architecto
            obcaecati molestias nostrum dicta dolorem, nesciunt sit ea ab,
            quidem earum animi provident tempora quibusdam? Porro, commodi
            nostrum!"
        />

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          {/* Misión */}
          <AboutStatement
            title="Nuesta Misión"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at, iusto
            voluptas maxime magni tenetur natus? Repellendus, nulla? Repellat
            incidunt modi ipsa ex aspernatur distinctio tempore molestiae minus
            voluptate inventore. Laboriosam, eum pariatur tempora eius eligendi
            laborum impedit et vero possimus magni quos enim iusto dolorum
            voluptatum perferendis, expedita excepturi repellat officiis dolore
            accusantium quam beatae est laudantium dolores! Ipsum."
          />

          {/* Cards */}
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* Card team */}
              <AboutCards
                Icon={FaTasks}
                title="Tareas en equipo"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam hic temporibus distinctio ratione qui recusandae
                    reiciendis excepturi assumenda repellat saepe?"
              />
              {/* Card Task */}
              <AboutCards
                Icon={GiTeamIdea}
                title="Trabajo en equipo"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam hic temporibus distinctio ratione qui recusandae
                    reiciendis excepturi assumenda repellat saepe?"
              />

              {/* Card Talks */}
              <AboutCards
                Icon={FaUsers}
                title="Charlas Motivacionales"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam hic temporibus distinctio ratione qui recusandae
                    reiciendis excepturi assumenda repellat saepe?"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
