const SobreMi = () => {
  return (
    <section
      className="my-0 flex flex-col lg:flex-row lg:h-[600px] animate-fade-in  w-screen justify-center lg:pl-[189px]"
      id="sobremi "
    >
      <div className="p-10  px-12 lg:w-[80%] lg:h-[500px] lg:self-center lg:justify-around ">
        <h1 className="text-sky-600 dark:text-sky-300 text-3xl font-bold tracking-widest ">
          Hola, Soy{" "}
        </h1>
        <p className=" py-2 text-3xl font-bold text-slate-600 dark:text-slate-300 ">
          Nixon Parra
        </p>
        <p className="text-4xl font-bold text-slate--500 dark:text-slate-600">
          Desarrollo Aplicaciones WEB - FULL STACK
        </p>
        <p className="mt-5 text-lg">
          {" "}
          Desarrollador junior con sólida formación en Desarrollo web y Ciencias
          de la Computación.
        </p>
        {/* Redes Sociales  */}
        <div className="py-6">
          <a
            href="https://www.linkedin.com/in/parrabnixon/"
            className="pr-2 text-2xl hover:text-sky-600 "
          >
            <ion-icon name="logo-linkedin" className="px-2"></ion-icon>
          </a>
          <a
            href="https://github.com/nixon1097"
            className="pr-2 text-2xl hover:text-sky-600 "
          >
            <ion-icon name="logo-github" className="px-2"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/w_pb777/"
            className="pr-2 text-2xl hover:text-sky-600 "
          >
            <ion-icon name="logo-instagram" className="px-2"></ion-icon>
          </a>
        </div>
        <div className="flex justify-center gap-4 ">
          <button className="border-2 rounded-md border-sky-400 p-4 w-[150px] text-lg tracking-widest hover:bg-sky-500 hover:shadow-md hover:shadow-sky-400 hover:dark:text-slate-900 ease-out duration-500 max-w-[250px]">
            <a href="#contactame">contáctame</a>
          </button>
          <button className="border-2 text-[14px] flex justify-centers rounded-md border-sky-400 p-4 w-[150px] text-lg tracking-widest hover:bg-sky-500 hover:shadow-md hover:shadow-sky-400 hover:dark:text-slate-900 ease-out duration-500 max-w-[250px]">
            <a className="" href="./cvNixonParra.pdf" download={true}>
              Descargar CV
            </a>
          </button>
        </div>
      </div>
      <div className="my-2 lg:my-12 w-full  ">
        <div className="w-[300px] lg:w-[400px]h-[320px] lg:mx-[24%] rounded-lg lg:w-[100%] lg:h-[100%]  md:mx-[30%] sm:mx-[25%] mx-[10%]">
          {" "}
          <img
            src="./img/Perfil.png"
            alt="nixonparra"
            className="opacity-80 hover:opacity-100 rounded-md bg-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
