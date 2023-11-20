const SobreMi = () => {
  return (
    <section
      className="my-0 flex flex-col lg:flex-row lg:h-[600px] animate-fade-in  px-12  w-screen"
      id="sobremi "
    >
      <div className="p-10  px-12 lg:w-[80%] lg:h-[500px] lg:self-center lg:justify-around ">
        <h1 className="text-sky-600 dark:text-sky-300 text-2xl font-bold tracking-widest leading-10">
          Hola, soy{" "}
        </h1>
        <p className="py-2 text-3xl font-bold text-slate-600 dark:text-slate-300 ">
          Nixon Parra
        </p>
        <p className="text-3xl font-bold text-slate--500 dark:text-slate-600">
          Desarrollo Aplicaciones WEB para un mejor futuro
        </p>
        <p className="mt-5 text-lg">
          {" "}
          Soy Desarrollador Front-end, Actual mennte enfocado en crear productos
          accesibles y Muy pronto Full Stack Developer
        </p>
        {/* Redes Sociales  */}
        <div className="py-6">
          <a href="" className="pr-2 text-2xl hover:text-sky-600 ">
            <ion-icon name="logo-linkedin" className="px-2"></ion-icon>
          </a>
          <a href="" className="pr-2 text-2xl hover:text-sky-600 ">
            <ion-icon name="logo-github" className="px-2"></ion-icon>
          </a>
          <a href="" className="pr-2 text-2xl hover:text-sky-600 ">
            <ion-icon name="logo-instagram" className="px-2"></ion-icon>
          </a>
        </div>
        <div>
          <button className="border-2 rounded-md border-sky-400 p-4 w-[250px] text-lg tracking-widest hover:bg-sky-500 hover:shadow-md hover:shadow-sky-400 hover:dark:text-slate-900 ease-out duration-500">
            <a href="#contactame">Contrátame</a>
          </button>
        </div>
      </div>
      <div className="my-1 w-full  ">
        <div className="w-[400px] h-[320px] m-auto bg-[url('./img/Perfil.png')] bg-cover rounded-lg lg:w-[100%] lg:h-[100%]  lg:bg-center lg:bg-no-repeat lg:bg-[length:650px_476px]   "></div>
      </div>
    </section>
  );
};

export default SobreMi;
