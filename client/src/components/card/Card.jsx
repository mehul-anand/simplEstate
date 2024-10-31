import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ propertyData }) {
  return (
    <div className="card">
      <Link className="imgContainer" to={`/${propertyData.id}`}>
        <img src={propertyData.img} alt={`image : ${propertyData.title}`} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${propertyData.id}`}>{propertyData.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{propertyData.address}</span>
        </p>
        <p className="price">₹ {propertyData.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>
                {propertyData.bedroom}{" "}
                {propertyData.bedroom > 1 ? "bedrooms" : "bedroom"}
              </span>
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>
                {propertyData.bathroom}{" "}
                {propertyData.bathroom > 1 ? "bathrooms" : "bathroom"}
              </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
