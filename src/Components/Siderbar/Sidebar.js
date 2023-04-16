import React, { useContext } from "react";
import { FilterContext } from "../../Context/Context";
import Rating from "../Rating/Rating";
import "./Sidebar.css";

const Sidebar = () => {
  const { filterDispatch } = useContext(FilterContext);

  const handleCheckbox = (e, value, filterType, unFilterType) => {
    if (e.target.checked) {
      filterDispatch({
        type: filterType,
        payload: value,
      });
    } else {
      filterDispatch({
        type: unFilterType,
        payload: value,
      });
    }
  };

  return (
    <div className="sidebar-conatiner">
      <h2>Search results</h2>
      <div className="sidebar-conatiner-1">
        <h3>Brand</h3>
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(
                e,
                "men's clothing",
                "FILTER_BY_BRAND",
                "UNFILTER_BY_BRAND"
              );
            }}
          />
          Men's cloathing
        </div>
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(
                e,
                "jewelery",
                "FILTER_BY_BRAND",
                "UNFILTER_BY_BRAND"
              );
            }}
          />
          Jewelery
        </div>
      </div>
      <div className="sidebar-container-2">
        <h3>Price Range</h3>
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 50, "FILTER_BY_PRICE", "UNFILTER_BY_PRICE");
            }}
          />
          Under $50
        </div>
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(
                e,
                 [100,1000],
                "FILTER_BY_PRICE",
                "UNFILTER_BY_PRICE"
              );
            }}
          />
          under $100-$1000
        </div>
      </div>
      <div className="sidebar-container-3">
        <h3>Rating</h3>
        <div className="rating">
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 5, "FILTER_BY_RATING", "UNFILTER_BY_RATING");
            }}
          />
          <Rating rating={5} />
        </div>
        <div className="rating">
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 4, "FILTER_BY_RATING", "UNFILTER_BY_RATING");
            }}
          />
          <Rating rating={4} />
        </div>
        <div className="rating">
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 3, "FILTER_BY_RATING", "UNFILTER_BY_RATING");
            }}
          />
          <Rating rating={3} />
        </div>
        <div className="rating">
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 2, "FILTER_BY_RATING", "UNFILTER_BY_RATING");
            }}
          />
          <Rating rating={2} />
        </div>
        <div className="rating">
          <input
            type="checkbox"
            onClick={(e) => {
              handleCheckbox(e, 1, "FILTER_BY_RATING", "UNFILTER_BY_RATING");
            }}
          />
          <Rating rating={1} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
