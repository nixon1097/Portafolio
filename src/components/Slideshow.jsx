import { useEffect, useRef, useState } from "react";
import "./SlidesShow.css";
import { data } from "../utils/data";

const Slideshow = () => {
  const listRef = useRef();
  const [imagIndex, setImagIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[imagIndex];
    // console.log(imgNode);

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [imagIndex]);
  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setImagIndex((curr) => {
        const isFirstSlide = imagIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = imagIndex === data.length - 1;
      if (!isLastSlide) {
        setImagIndex((curr) => curr + 1);
      }
    }
  };
  return (
    <div className="main-container">
      <div className="slider-conatiner">
        <div className="leftArrow" onClick={() => scrollToImage("prev")}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div>
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <img
                    src={item.imgUrl}
                    className="w-[500px] h-72"
                    alt={item.name}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
