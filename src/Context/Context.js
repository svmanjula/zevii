import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { filterReducer } from "./Reducer";

export const FilterContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  //fetch the data from the api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(products)

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    wishlist: [],
    byBrand: [],
    byPrice: [],
    byRating: [],
    bySearch: '',
  });
  // console.log(filterState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch, products }}>
      {children}{" "}
    </FilterContext.Provider>
  );
};

export default Context;
