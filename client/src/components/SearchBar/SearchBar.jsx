import React, { useState } from "react";
import "./searchBar.scss";

const btnTypes = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const btnTypeChanger = (newType) => {
    setQuery((prev) => ({ ...prev, type: newType }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {btnTypes.map((btnName, index) => (
          <button
            key={index}
            onClick={() => btnTypeChanger(btnName)}
            className={query.type === btnName ? "active" : ""}
          >
            {btnName}
          </button>
        ))}
        <button>Sell</button>
      </div>
      <form action="">
        <input type="text" name="location" placeholder="location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="minimum price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="maximum price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
