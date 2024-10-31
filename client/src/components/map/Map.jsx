import React from "react";
import "./map.scss";
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import Pin from "../pin/Pin";

function Map({items}) {
  return (
    <MapContainer className="map" center={[52.4797,-1.90269]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item)=>(<Pin key={item.id} item={item}/>))}
    </MapContainer>
  );
}

export default Map;
