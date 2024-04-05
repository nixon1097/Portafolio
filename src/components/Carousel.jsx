import CarouselCard from "./CarouselCard";

const Carousel = ({ slides }) => {
  return (
    <section
      id="stacks"
      className="flex-grow  py-16 justify-center items-center  my-[120px] p-8 "
    >
      <h3 className=" text-3xl  first-letterlp text-slate-700 dark:text-white  font-bold tracking-widest text-center">
        Stacks
      </h3>

      <div className=" min-w-[300px]    grid grid-cols  items-center justify-center md:w-[600px] m-auto    mx-auto  text-center ">
        <CarouselCard>
          {slides.map((s) => {
            return (
              <div key={s.id}>
                <img key={s.id} src={s.imgUrl} className="  p-12 " />
              </div>
            );
          })}
        </CarouselCard>
      </div>
    </section>
  );
};

export default Carousel;


// // buen dia
// le saluda nixon parra he visto su oferta en linkedin el cual me encuentro muy interesado, adjunto mi cv para mayor información y te cuento un poco de mi:
// he realizado proyectos  propios como los que se encuentra en mi portafolio, en el cual puedes ver, a su vez pueden   observar en mi github varios repositorios que he realizados pero no e desplegado , soy técnico en analista y programador de sistemas, y especializado mediante un bootcamp de academlo en desarrollo full stack.

// cuéntame, nos podemos reunir para comentarte mas com mi perfil sumaria a tu equipo?

// atento a comentarios 

// portafolio :https://portafolionp.netlify.app/