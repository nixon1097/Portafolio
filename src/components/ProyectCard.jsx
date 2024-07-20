const ProyectCard = ({ item }) => {
  return (
    <div
      key={item?.id}
      className="border-2 rounded-lg bg-white dark:bg-slate-800 m-5 max-h-[500px]  hover:scale-110 transition-all  duration-500 hover:shadow-lg dark:hover:shadow-sky-500 hover:shadow-cyan-600"
    >
      <div className="m-2  h-[400px] ">
        <a href={item?.url}>
          <div className="flex justify-center mx-h-[200px] ">
            <img
              src={item?.urlImg}
              alt={item?.titleImag}
              className="opacity-80 hover:opacity-100 rounded-md bg-cover max-h-[200px]  "
            />
          </div>
        </a>
        <div className="">
          <h4 className="font-bold mt-2 text-center">{item.title}</h4>
          <p className="px-6 font-semibold my-2 text-center">{item.messag}</p>
        </div>

        <article className="flex justify-between  text-center ">
          <div className=" flex flex-nowrap items-center  text-slate-600 dark:text-slate-200  px-1  ">
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
    </div>
  );
};

export default ProyectCard;
