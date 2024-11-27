import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

function Card({ propertyData }) {
  // Add check to ensure propertyData is defined
  if (!propertyData) {
    console.error("Card component received undefined propertyData");
    return null; // Optionally return a fallback UI
  }

  // Check if required fields like 'id' exist
  if (
    !propertyData.id ||
    !propertyData.images ||
    propertyData.images.length === 0
  ) {
    console.error("propertyData is missing required fields: id or images");
    return null; // Optionally return a fallback UI
  }

  return (
    <div className="card">
      <Link className="imgContainer" to={`/${propertyData.id}`}>
        <img
          src={propertyData.images[0]}
          alt={`image: ${propertyData.title}`}
        />
        <div className="ribbon">{propertyData.type}</div>
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${propertyData.id}`}>{propertyData.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{propertyData.address}</span>
        </p>
        <p className="price">
          ₹{" "}
          {propertyData.price >= 1_00_00_000
            ? `${(propertyData.price / 1_00_00_000).toFixed(1)} crore`
            : propertyData.price >= 1_00_000
            ? `${(propertyData.price / 1_00_000).toFixed(1)} lakh`
            : propertyData.price >= 1_000
            ? `${(propertyData.price / 1_000).toFixed(1)} thousand`
            : propertyData.price}
          <span>{propertyData.type === "rent" ? "/month" : ""}</span>
        </p>

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
