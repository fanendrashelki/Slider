import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ image }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const prev = () => {
    setCurrentImg((index) =>
      currentImg === 0 ? image.length - 1 : currentImg - 1
    );
  };
  const Next = () => {
    setCurrentImg((index) =>
      currentImg === image.length - 1 ? 0 : currentImg + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Next();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <div className="slider">
      <button className="prev" onClick={prev}>
        <i class="fa-regular fa-less-than"></i>
      </button>
      <div className="img">
        <img src={image[currentImg]} alt="" />
      </div>
      <button className="next" onClick={Next}>
        <i class="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};

export default Banner;
