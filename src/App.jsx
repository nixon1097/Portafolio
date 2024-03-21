import "./apps";
import Carousel from "./components/Carousel";
import Contactame from "./components/Contactame";
import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import { data } from "./utils/Data";

function App() {
  return (
    <>
      {/* inicio de menu */}
      <header>
        <NavHeader />
      </header>
      {/* fin del menu */}

      {/* contenido principal */}
      <main className="grid gap-10   justify-center items-center">
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
