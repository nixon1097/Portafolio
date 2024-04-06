import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function CarouselCard({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const result = (r) => {
    if (r === "next") {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    } else {
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      result("next");
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative  p-2  ">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={() => {
            result("prev");
          }}
          className=" rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white hover:p-[2px]"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={() => {
            result("next");
          }}
          className=" rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white hover:p-[2px]"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-16 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 dark:bg-slate-200 bg-slate-800 rounded-full
                 ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
