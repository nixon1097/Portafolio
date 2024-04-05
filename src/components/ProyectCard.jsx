const ProyectCard = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5 max-h-[550px] hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600 flex flex-wrap justify-center items-center  p-4 gap-4  "
    >
      <div className="flex justify-center items-center ">
        <a href={item?.url} className=" ">
          <img
            src={item?.urlImg}
            alt={item?.titleImag}
            className="opacity-80 hover:opacity-100 rounded-md bg-cover max-h-[250px]  "
          />
        </a>
      </div>
      <div className="grid  justify-center items-center text-center  gap-2">
        <h2 className="font-bold mt-2 text-lg ">{item.title}</h2>
        <p className="px-4 font-semibold my-2 ">{item.messag}</p>
      </div>

      <article className="flex justify-between  p-2  gap-20 lg:gap-[260px] ">
        <div className=" flex items-center  text-slate-600 dark:text-slate-200  px-1  ">
          {item?.icon.stack.map((icon) => {
            return (
              <span
                key={icon.id}
                className="transition-all duration-700 hover:scale-150"
              >
                <i className={`${icon.icon} pr-2 text-2xl ${icon.hover}`}></i>
              </span>
            );
          })}
        </div>
        <div className="text-4xl text-slate-600 dark:text-slate-200 pr-2 flex flex-nowrap ">
          {item?.icon.repoAndVisual.map((visual) => {
            return (
              <a
                key={visual.id}
                href={visual.url}
                className="px-2 hover:text-sky-600 "
              >
                <ion-icon name={visual.icon} className="px-2"></ion-icon>
              </a>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default ProyectCard;
