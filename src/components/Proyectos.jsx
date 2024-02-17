const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="my-12 grid grid-cols   items-center justify-center w-[90%] m-auto md:grid-cols-[1fr,1fr]  max-w-[1200px]  "
    >
      {/* primerproyecto */}
      <div className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5 max-h-[500px] hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600">
        <div className="m-2  ">
          <a href="https://pokedexdd.netlify.app/">
            <img
              src="./img/Pokedex.jpg"
              alt="Imagen Pokedex"
              className="opacity-80 hover:opacity-100 rounded-md bg-cover"
            />
          </a>
          <div>
            <h4 className="font-bold my-2 text-center">Pokedex </h4>
            <p className="px-4 font-semibold my-2 text-center">
              Explora nuestro fascinante mundo Pokémon con la Pokedex. Descubre
              información detallada, estadísticas y curiosidades sobre cada
              criatura. Embárcate en una aventura para convertirte en el mejor
              entrenador, con datos completos y una experiencia emocionante que
              te sumerge en el universo Pokémon
            </p>
          </div>
          <article className="flex justify-between  text-center ">
            <div className=" flex flex-nowrap items-center  text-slate-600 dark:text-slate-200  px-1  ">
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-react pr-2 text-2xl hover:text-sky-600"></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-tailwind-css pr-2 text-2xl hover:text-sky-600"></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-css3 pr-2 text-2xl hover:text-sky-600 "></i>
              </span>
            </div>
            <div className="text-4xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap ">
              <a
                href="https://github.com/nixon1097/pokedex"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="logo-github" className="px-2"></ion-icon>
              </a>
              <a
                href="https://pokedexdd.netlify.app/"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="eye-outline"></ion-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* segundo proyecto */}
      <div className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5 max-h-[490px]  hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600 ">
        <div className="m-2 ">
          <a href="https://weatherappnp.netlify.app">
            <img
              src="./img/weatherapp.jpg"
              alt="Imagen weatherapp"
              className="opacity-80 hover:opacity-100 rounded-md bg-cover"
            />
          </a>
          <div>
            <h4 className="font-bold my-2 text-center">weather app </h4>
            <p className="px-4 font-semibold  text-center">
              Nuestra Weather App proporciona pronósticos precisos, información
              detallada y alertas en tiempo real, permitiéndote planificar tus
              actividades con confianza. Mantente un paso adelante del clima,
              evita sorpresas desagradables y organiza tu día de manera
              eficiente gracias a nuestra aplicación intuitiva y confiable
            </p>
          </div>
          <article className="flex justify-between  text-center ">
            <div className=" flex flex-nowrap items-center  text-slate-600 dark:text-slate-200  px-1  ">
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-react pr-2 text-2xl hover:text-sky-600"></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-tailwind-css pr-2 text-2xl hover:text-sky-600"></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-css3 pr-2 text-2xl hover:text-sky-600 "></i>
              </span>
            </div>
            <div className="text-4xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap ">
              <a
                href="https://github.com/nixon1097/weather-app"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="logo-github" className="px-2"></ion-icon>
              </a>
              <a
                href="https://weatherappnp.netlify.app"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="eye-outline"></ion-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* tercer proyecto  */}
      <div className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5 max-h-[500px]  hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600 ">
        <div className="m-2 ">
          <a href="https://legendary-cranachan-e8ccd9.netlify.app/">
            <img
              src="./img/pokemonjuego.png"
              alt="Imagen pokemon juego"
              className="opacity-80 hover:opacity-100 rounded-md bg-cover"
            />
          </a>
          <div>
            <h4 className="font-bold my-2 text-center">Pokemon play </h4>
            <p className="px-4 font-semibold my-2 text-center">
              Un juego de memoria de Pokémon con JavaScript, CSS y HTML. Los
              jugadores emparejan cartas de Pokémon idénticas, ganando puntos.
              El desafío: encontrar pares antes de que el tiempo se agote,
              fomentando concentración y memoria visual.
            </p>
          </div>
          <article className="flex justify-between  text-center">
            <div className=" flex flex-nowrap items-center  text-slate-600 dark:text-slate-200  px-1  ">
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-javascript pr-2 text-2xl hover:text-yellow-400 "></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-html5 pr-2 text-2xl hover:text-orange-600 "></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-css3 pr-2 text-2xl hover:text-sky-600 "></i>
              </span>
            </div>
            <div className="text-4xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap ">
              <a
                href="https://github.com/nixon1097/juegopokemon"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="logo-github" className="px-2"></ion-icon>
              </a>
              <a
                href="https://legendary-cranachan-e8ccd9.netlify.app/"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="eye-outline"></ion-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* Cuarto proyecto  */}
      <div className="border-2 rounded-lg bg-white dark:bg-slate-800 m-4  max-h-[500px]   hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600">
        <div className="m-2 ">
          <a href="https://ryckandmortyni.netlify.app">
            <img
              src="./img/rickandmortyn.png"
              alt="Imagen rickandmorty"
              className="opacity-80 hover:opacity-100 rounded-md bg-cover"
            />
          </a>
          <div>
            <h4 className="font-bold my-2 text-center">RickandMorty</h4>
            <p className="px-4 font-semibold  text-center">
              Explora el caótico mundo de Rick y Morty con proyectos web en
              React y Tailwind CSS. Con Axios, Redux y Flexbox, accede y
              gestiona datos de APIs para una experiencia inmersiva. Sumérgete
              en las aventuras interdimensionales con diseños dinámicos y una
              narrativa única. ¡Únete a la locura ahora!
            </p>
          </div>
          <article className="flex justify-between  text-center">
            <div className=" flex flex-nowrap items-center  text-slate-600 dark:text-slate-200  px-1  ">
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-javascript pr-2 text-2xl hover:text-yellow-400 "></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-html5 pr-2 text-2xl hover:text-orange-600 "></i>
              </span>
              <span className="transition-all duration-700 hover:scale-150">
                <i className="bx bxl-css3 pr-2 text-2xl hover:text-sky-600 "></i>
              </span>
            </div>
            <div className="text-4xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap ">
              <a
                href="https://github.com/nixon1097/juegopokemon"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="logo-github" className="px-2"></ion-icon>
              </a>
              <a
                href="https://legendary-cranachan-e8ccd9.netlify.app/"
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name="eye-outline"></ion-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
