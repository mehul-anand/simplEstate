import React, { useEffect, useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlides = (direction) => {
    if (direction === "right") {
      if (imageIndex < 3) {
        setImageIndex((prev) => setImageIndex(prev + 1));
      } else {
        setImageIndex(0);
      }
    } else {
      if (imageIndex > 0) {
        setImageIndex((prev) => setImageIndex(prev - 1));
      } else {
        setImageIndex(3);
      }
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setImageIndex(null);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        changeSlides("right");
        break;
      case "ArrowLeft":
        changeSlides("left");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="left-arrow"
              onClick={() => changeSlides("left")}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="rightArrow"
              alt="right-arrow"
              onClick={() => changeSlides("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="biggerImg">
        <img
          src={images[0]}
          alt="primary-img"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallerImgs">
        {images.slice(1).map((imageToDisp, index) => (
          <img
            key={index}
            src={imageToDisp}
            alt="supplementary image"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
