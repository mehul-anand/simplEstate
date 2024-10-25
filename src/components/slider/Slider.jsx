import React from "react";
import "./slider.scss";

function Slider({ images }) {
  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="" />
        </div>
        <div className="imgContainer">
          <img src={images[0]} alt="" />
        </div>
        <div className="arrow">
          <img src="/arrow.png" className="rightArrow" alt="" />
        </div>
        <div className="close">X</div>
      </div>
      <div className="biggerImg">
        <img src={images[0]} alt="primary-img" />
      </div>
      <div className="smallerImgs">
        {images.slice(1).map((imageToDisp,index) => (
          <img key={index} src={imageToDisp} alt="supplementary image"/>
        ))}
      </div>
    </div>
  );
}

export default Slider;
