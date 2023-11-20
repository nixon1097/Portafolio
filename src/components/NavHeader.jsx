import { useEffect, useState } from "react";

const NavHeader = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const menuButtonSpans = document.querySelectorAll("#menu-button span ");
  const links = document.querySelectorAll("#menu a");
  const options = [
    {
      icons: "sunny",
      text: "light",
    },
    {
      icons: "moon",
      text: "dark",
    },
    {
      icons: "desktop-outline",
      text: "system",
    },
  ];

  const handelOnclick = () => {
    document.querySelector("#menu").classList.toggle("hidden");
    menuButtonSpans?.forEach((span) => {
      span.classList.toggle("animado");
    });
  };

  //   cerrar menu cuando habro un link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector("#menu").classList.add("hidden");
      menuButtonSpans.forEach((span) => {
        span.classList.remove("animado");
      });
    });
  });

  // cierra menu cuando maximo la ventana
  window.onresize = function () {
    let w = window.outerWidth;
    if (w > 768) {
      document.querySelector("#menu").classList.add("hidden");
      menuButtonSpans.forEach((span) => {
        span.classList.remove("animado");
      });
    }
  };
  //   toma el thema del compuitadora
  function onWindowMatch() {
    if (
      localStorage === "dark " ||
      (!("theme " in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  useEffect(() => {
    handelOnclick();
  }, []);

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <nav className="flex justify-between py-10 m-auto px-10 text-lg font-medium tracking-widest md:items-baseline animate-slide-down">
      <div
        className=" text-2xl font-extrabold   flex items-start justify-center 
   "
      >
        <a href="" className="text-start">
          NP
        </a>
      </div>

      <div
        id="menu"
        className={`bg-white dark:bg-slate-800 p-7 h-[380px] w-[320px] md:flex flex-col items-start justify-around rounded-lg text-dark dark:text-white md:flex-row md:w-full md:py-0 md:h-[50px] md:bg-inherit md:dark:bg-primary  hidden `}
      >
        <ul className="flex h-5/6 flex-col md:items-center justify-around md:flex-row md:justify-center w-screen ">
          <li className="md:px-5 hover:text-sky-600">
            <a href="#sobremi">Quien Soy</a>
          </li>
          <li className="md:px-5 hover:text-sky-600">
            <a href="#jobSection">Experiencia</a>
          </li>
          <li className="md:px-5 hover:text-sky-600">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className="md:px-5 hover:text-sky-600">
            <a href="#contactame">Contáctame</a>
          </li>
        </ul>
        {/* Boton modo oscruro  */}
        <div className="w-[130px]  right-10 duration-100 dark:bg-slate-700 bg-gray rounded-xl flex  justify-between p-1 items-center">
          {options?.map((option) => (
            <button
              key={option.text}
              onClick={() => setTheme(option.text)}
              className={`w-8 h-8 leading-9 text-2xl rounded-full m-1  hover:text-sky-600 ${
                theme == option.text && "text-sky-600 "
              }`}
            >
              <ion-icon name={option.icons} classList=""></ion-icon>
            </button>
          ))}
        </div>
      </div>
      {/* Boton Menu Hambruguesa */}
      <button
        id="menu-button"
        onClick={handelOnclick}
        className="absolute top-10 right-12 md:hidden"
      >
        <span className="br-1 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"></span>
        <span className="br-2 block  bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"></span>
        <span className="br-3 block bg-black dark:bg-white my-2 rounded-md h-[3px] w-[28px]"></span>
      </button>
      {/* fin del menu  */}
    </nav>
  );
};
export default NavHeader;
