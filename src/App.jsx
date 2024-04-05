import { data } from "./Data";
import Carousel from "./components/Carousel";
import Contactame from "./components/Contactame";
import Footer from "./components/Footer";

import NavHeader from "./components/NavHeader";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
// import { useTranslation, Trans } from "react-i18next";

// const lngs = {
//   en: { nativeName: "En" },
//   es: { nativeName: "Es" },
// };

function App() {
  // const { t, i18n } = useTranslation();

  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <div>
            {Object.keys(lngs).map((lng) => (
              <button
                className=" border-cyan-900  border-4 p-1 hover:border-green-700"
                key={lng}
                style={{
                  fontWeight:
                    i18n.resolvedLanguage === lng ? "bold " : "normal",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </header>
      </div> */}
      {/* inicio de menu */}
      <header className="border-2">
        <NavHeader />
      </header>
      {/* fin del menu */}

      {/* contenido principal */}
      <main className="grid gap-10   justify-center items-center ">
        <SobreMi />
        <Proyectos />
        <>
          <Carousel slides={data} />
        </>
        <Contactame />

        <Footer />
      </main>
    </>
  );
}

export default App;
