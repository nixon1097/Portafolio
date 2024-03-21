import { Proyect } from "../utils/Data";
import ProyectCard from "./ProyectCard";

const Proyectos = () => {
  return (
    <section id="proyectos">
      <h3 className="text-3xl text-slate-700 dark:text-white my-5 px-10 font-bold tracking-widest text-center">
        Mis Ultimos Proyectos
      </h3>
      <section className="my-12 grid grid-cols   items-center justify-center w-[90%] m-auto md:grid-cols-[1fr,1fr]  max-w-[1200px]  ">
        {Proyect?.map((item) => {
          return <ProyectCard key={item.id} item={item} />;
        })}
      </section>
    </section>
  );
};

export default Proyectos;
