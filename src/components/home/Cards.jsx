import { Card } from "../Card";

export const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        <Card
          url="/home/mikrotik.jpg"
          title="Instalación de Mikrotik"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris. Sed non diam ac sem feugiat faucibus sit amet eget metus. "
        />
        <Card
          url="/home/olt.jpg"
          title="Configuración de OLT"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris. Sed non diam ac sem feugiat faucibus sit amet eget metus. "
        />
        <Card
          url="https://flowbite.com/docs/images/blog/image-1.jpg"
          title="Sintamación de Software"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida eget dui scelerisque varius. Phasellus nec dictum sapien, quis dapibus mauris. Sed non diam ac sem feugiat faucibus sit amet eget metus. "
        />
      </div>
    </>
  );
};
