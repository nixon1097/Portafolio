import emailjs from "@emailjs/browser";
import { useRef } from "react";
import swal from "sweetalert";
const Contactame = () => {
  const refFrom = useRef();
  const SERVICEID = "service_vmozqhp";
  const TEMPLATEID = "template_v503q2g";
  const APIKEY = "2x-E3eyKZg0TrDjE0";
  const obje = {
    success: { title: "Correo enviado ", icon: "success", button: "Aceptar" },
    error: { title: " ", icon: "error", button: "Aceptar" },
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(refFrom.email);

    emailjs
      .sendForm(SERVICEID, TEMPLATEID, refFrom.current, APIKEY)
      .then((result) => {
        swal(obje.success);
        console.log(result.text);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        obje.error["title"] = error;
        swal(obje.error);
      });
  };

  return (
    <section id="contactame" className="text-blue-600 grid    ">
      <h3 className="text-3xl  text-slate-700 dark:text-white mt-12 mb-10 px-10 font-bold tracking-widest text-center">
        {" "}
        Contáctame
      </h3>
      <section className="grid  w-[80%] mx-auto  max-w-[600px]  ">
        <form
          ref={refFrom}
          action=""
          onSubmit={handelSubmit}
          className="min-w-[150px]  md:max-w-[600px] grid gap-3"
        >
          <div>
            <input
              placeholder="info@ejempli.com"
              type="email"
              name="email"
              id="email"
              required
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              id="name"
              required
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Mensaje..."
              name="message"
              id="message"
              rows="5"
              className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
            <a
              href="mailto:nixonandrewparra@gmail.com"
              className="opacity-0"
              id="trucazo"
            ></a>
          </div>

          <button className="bg-sky-600 text-white p-3 w-full rounded-lg text-xl tracking-widest btn-send hover:bg-sky-500 hover:shadow-md hover:shadow-sky-400 hover:dark:text-slate-900">
            Enviar mensaje{" "}
          </button>
        </form>
      </section>
    </section>
  );
};
export default Contactame;
