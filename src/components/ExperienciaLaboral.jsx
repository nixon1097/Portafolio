const ExperienciaLaboral = () => {
  const articles = document.querySelectorAll("#jobSection article ");
  const firstLink = document.querySelector("#link1");
  const jobLinks = document.querySelectorAll("#jobSection button");
  const handelChange = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      articles.forEach((article) => {
        article.classList.add("hidden");
      });
      const element = document.getElementById(id);
      element.classList.remove("hidden");
    }
  };
  jobLinks.forEach((link) => {
    link.addEventListener("click", () => {
      firstLink.classList.remove(
        "border-sky-500",
        "bg-white",
        "dark:bg-slate-700"
      );
    });
  });

  return (
    <section
      className="my-12 flex flex-col w-[84%] m-auto lg:flex-row lg:w-[87%] lg:my-28 "
      id="jobSection"
      onClick={handelChange}
    >
      <div className="flex justify-between lg:flex-col lg:w-[20%] font-bold text-sm md:text-xl">
        <button
          type="button"
          id="link1"
          data-id="job1"
          className="border-b-2 hover:dark:bg-slate-700 w-full  py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left border-sky-500 bg-white dark:bg-slate-700  md:pl-2"
        >
          SolucionesNavarro
        </button>

        <button
          type="button"
          id="link2"
          data-id="job2"
          className="border-b-2 hover:dark:bg-slate-700 w-full -px-4 py-1 hover:bg-white focus:bg-white focus:border-sky-500 focus:dark:bg-slate-700 lg:border-l-2 lg:border-b-0 lg:h-full lg:text-left md:pl-4  "
        >
          SolucionesNavarro
        </button>
      </div>
      {/* jobs Description */}
      <div className="my-5 lg:px-10 lg:my-0 lg:max-w-[800px] ">
        <article id="job1">
          <h3 className="flex justify-between">
            Particante De Front-End{" "}
            <span className="text-sky-500 font-bold">@solucionesnavarro</span>{" "}
          </h3>
          <h4 className="text-sm pb-5">Octubre 2021 - Marzo 2022</h4>
          <ul>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                {" "}
                He Desarrollado una interfaz visual agradable , eficiente y
                facil de mantener tanto para clientes internos como para
                clinetes externos
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                He trabajado con varias tecnologias web modernas incluyendo
                bootstrap, javaScrip, CSS y htaml a su vez con utilizando{" "}
                <span>Scriptcase</span> siendo esta una herramienta RAD,
                funciona como un generador de código PHP, a partir de un
                proyecto en su entorno de desarrollo.
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                He trabajado con un bajo nivel pero gran conociemtno de msyql en
                la base de datos, tanto rgistrando datos como extrayendo datos.
              </p>
            </li>
          </ul>
        </article>
        {/* secciones ocultas por defecto  */}
        {/* job #2 description  */}

        <article id="job2" className="hidden">
          <h3 className="flex justify-between">
            Particante De Front-End{" "}
            <span className="text-sky-500 font-bold">@solucionesnavarro</span>{" "}
          </h3>
          <h4 className="text-sm pb-5">Octubre 2021 - Marzo 2022</h4>
          <ul>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                {" "}
                +Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam nisi accusantium quibusdam iste repudiandae voluptatibus
                ipsum vero a laudantium iusto quaerat architecto odit ex
                repellendus quia, odio exercitationem inventore perferendis.
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                animi ex ratione aliquam, impedit ullam fugiat magnam magni
                atque provident blanditiis exercitationem nobis ab molestias rem
                aperiam quam iste consectetur?
              </p>
            </li>
            <li className="flex items-center py-2">
              <span className="pr-2 text-sky-500 font-black">&#9655;</span>
              <p className="text-stone-900 dark:text-cyan-50 font-normal px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, natus libero voluptatibus nam eos repellendus
                eveniet saepe est rerum nulla dolor vitae eum! Aliquam ex,
                ducimus quasi dolorem dolorum magni?
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienciaLaboral;
