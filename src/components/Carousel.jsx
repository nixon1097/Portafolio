import CarouselCard from "./CarouselCard";

const Carousel = ({ slides }) => {
  return (
    <section
      id="stacks"
      className="flex-grow  py-16 justify-center items-center  my-[120px] p-8 "
    >
      <h3
        className=" text-3xl  first-letterlp}
      +{ñ,+{text-slate-700 dark:text-white  font-bold tracking-widest text-center"
      >
        Stacks
      </h3>

      <div className=" min-w-[300px]    grid grid-cols  items-center justify-center md:w-[600px] m-auto    mx-auto  text-center ">
        <CarouselCard>
          {slides.map((s) => {
            return <img key={s.id} src={s.imgUrl} className="  p-12 " />;
          })}
        </CarouselCard>
      </div>
    </section>
  );
};

export default Carousel;
