import "./App.css";
import Contactame from "./components/Contactame";
import ExperienciaLaboral from "./components/ExperienciaLaboral";
import NavHeader from "./components/NavHeader";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <>
      {/* inicio de menu */}
      <header>
        <NavHeader />
      </header>
      {/* fin del menu */}

      {/* contenido principal */}
      <main className="grid justify-center items-center">
        {/* #1 seccion hero */}
        <SobreMi />
        {/* #2 experiencia laboral  */}
        <h2 className="text-3xl text-slate-700 dark:text-white font-bold tracking-widest w-[85%] m-auto text-center mt-8  ">
          Experiencia Laboral
        </h2>
        <ExperienciaLaboral />
        <h3 className="text-3xl text-slate-700 dark:text-white my-5 px-10 font-bold tracking-widest text-center">
          Mis Ultimos Proyectos
        </h3>
        <Proyectos />
        <Contactame />

        <footer className="text-center mt-12 mb-5 grid justify-center items-center mx-auto px-[20%] ">
          <p> Diseñado &#38; Desarrollado por Nixon Parra </p>
          <div className="flex gap-2 my-2 mx-auto">
            <a href="">
              <i className="bi bi-instagram hover:text-sky-500"></i>
            </a>
            <a href="">
              <i className="bi bi-github hover:text-sky-500"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin hover:text-sky-500"></i>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
