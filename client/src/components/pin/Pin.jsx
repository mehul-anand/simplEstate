import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss"

function Pin({ item }) {
  return (
    <div className="pin">
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.images[0]} alt={item.title} />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>
                {item.bedroom}{" "}
                {item.bedroom > 1 ? "bedrooms" : "bedroom"}
              </span>
              <span>
                {item.bathroom}{" "}
                {item.bathroom > 1 ? "bathrooms" : "bathroom"}
              </span>
              <b>₹ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}

export default Pin;
