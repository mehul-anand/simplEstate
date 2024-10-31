import React from "react";
import "./list.scss";
import { listData } from "../../lib/dummyData";
import Card from "../card/Card";

function List() {
    
  return (
    <div className="list">
      {listData.map((propObj) => (
        <Card key={propObj.id} propertyData={ propObj } />
      ))}
    </div>
  );
}

export default List;
