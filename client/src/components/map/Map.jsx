import React from "react";
import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  // console.log(items)
  const avgValueLatitude  = items.reduce((acc,curr)=>{
    return acc+Number(curr.latitude)
  },0)/items.length
  const avgValueLongitude  = items.reduce((acc,curr)=>{
    return acc+Number(curr.longitude)
  },0)/items.length

  // console.log(`avg latitude : ${avgValueLatitude}`)
  // console.log(`avg latitude : ${avgValueLongitude}`)
  return (
    <MapContainer
      className="map"
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [avgValueLatitude,avgValueLongitude]
      }
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
