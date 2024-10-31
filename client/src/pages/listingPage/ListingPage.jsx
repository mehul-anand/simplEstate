import React from "react";
import "./listingPage.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListingPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((propertyData) => (
            <Card key={propertyData.id} propertyData={propertyData} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  );
}

export default ListingPage;
