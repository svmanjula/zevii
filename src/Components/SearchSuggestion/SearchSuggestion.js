import React, { useContext } from "react";
import { FilterContext } from "../../Context/Context";
import "./SearchSuggestion.css";

const SearchSuggestion = () => {
  const { products } = useContext(FilterContext);
  const prodCategory = products.filter((prod) => prod.category === "jewelery");

  return (
    <div className="sugg-container1">
      <h3>Latest Trends</h3>

      <div className="sugg-container2">
        {prodCategory.map((prod) => {
          return (
            <div key={prod.id}>
              <div  className="sugg-container3">
                <img src={prod.image} alt="img" className="sugg-img" />
                <p className="prod-sugg-title">{prod.title.split(" ").slice(0, 2).join(" ")} </p>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Popular suggestions</h3>

      <ul className="sugg-list" >
        <li>Mens wear</li>
        <li>Womens wear</li>
        <li>Jewellery </li>
        <li>Electronics</li>
      </ul>
    </div>
  );
};

export default SearchSuggestion;
