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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              at neque. Ea voluptates molestiae quasi, accusantium quae vel
              corrupti vero! Cupiditate natus numquam aut vero sequi veritatis
              tempora nihil earum.
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
            <p className="px-4 font-semibold my-2 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              at neque. Ea voluptates molestiae quasi, accusantium quae vel
              corrupti vero! Cupiditate natus numquam aut vero sequi veritatis
              tempora nihil earum.
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
            <h4 className="font-bold my-2 text-center">juego pokemon </h4>
            <p className="px-4 font-semibold my-2 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              at neque. Ea voluptates molestiae quasi, accusantium quae vel
              corrupti vero! Cupiditate natus numquam aut vero sequi veritatis
              tempora nihil earum.
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
      <div className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5  max-h-[500px]   hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600">
        <div className="m-2 ">
          <a href="https://legendary-cranachan-e8ccd9.netlify.app/">
            <img
              src="./img/pokemonjuego.png"
              alt="Imagen pokemon juego"
              className="opacity-80 hover:opacity-100 rounded-md bg-cover"
            />
          </a>
          <div>
            <h4 className="font-bold my-2 text-center">juego pokemon </h4>
            <p className="px-4 font-semibold my-2 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
              at neque. Ea voluptates molestiae quasi, accusantium quae vel
              corrupti vero! Cupiditate natus numquam aut vero sequi veritatis
              tempora nihil earum.
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
