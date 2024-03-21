import { sobreMi } from "../utils/Data";
const SobreMi = () => {
  const { icon, contacto } = sobreMi;

  return (
    <section
      className="my-0 flex flex-col lg:flex-row lg:h-[600px] animate-fade-in    justify-center lg:pl-[20px]"
      id="sobremi "
    >
      <div className="p-10  px-12 lg:w-[80%] lg:h-[500px] lg:self-center lg:justify-around ">
        <h1 className="text-sky-600 dark:text-sky-300 text-3xl font-bold tracking-widest animate-fade-right animate-once animate-delay-100 animate-ease-in ">
          Hola, Soy{" "}
        </h1>
        <p className=" py-2 text-3xl font-bold text-slate-600 dark:text-slate-300 animate-fade-right animate-once animate-delay-2000 animate-ease-in ">
          Nixon Parra
        </p>
        <p className="text-4xl font-bold text-slate--500 dark:text-slate-600 animate-fade-right animate-once animate-delay-3000 animate-ease-in">
          Desarrollo Aplicaciones WEB - FULL STACK
        </p>
        <p className="mt-5 text-lg animate-fade-right animate-once animate-delay-4000 animate-ease-in-out">
          {" "}
          Desarrollador junior con sólida formación en Desarrollo web y Ciencias
          de la Computación.
        </p>
        {/* Redes Sociales  */}
        <div className="py-6">
          {icon?.map((item) => {
            return (
              <a
                key={item?.id}
                href={item?.urlIcon}
                className="pr-2 text-2xl hover:text-sky-600 "
              >
                <ion-icon name={item?.name} className="px-2"></ion-icon>
              </a>
            );
          })}
        </div>
        <div className="flex justify-center gap-4 ">
          {contacto?.map((item) => {
            return (
              <button
                key={item.id}
                className="border-2 rounded-md border-sky-400 p-4 w-[150px] text-lg tracking-widest hover:bg-sky-500 hover:shadow-md hover:shadow-sky-400 hover:dark:text-slate-900 ease-out duration-500 max-w-[250px]"
              >
                <a href={item.url} download={item.download}>
                  {item.title}
                </a>
              </button>
            );
          })}
        </div>
      </div>
      <div className="my-2 lg:my-12 w-full justify-center flex items-center flex-wrap  basis-1/4">
        <div className="rounded-full w-[400px]  p-6  ">
          {" "}
          <img
            src="./img/icon.png"
            alt="nixonparra"
            className=" dark:opacity-80 hover:opacity-100 bg-cover shadow-zinc-100 drop-shadow-4xl dark:drop-shadow-3xl rounded-full 
            animate-bounce md:animate-infinite animate-twice animate-duration-[3000ms] animate-ease-in-out 
             "
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
