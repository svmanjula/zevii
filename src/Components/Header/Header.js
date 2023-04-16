import React, { useContext, useState } from "react";
import { FilterContext } from "../../Context/Context";
import { BsSearch } from "react-icons/bs";
import "./Header.css";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const location = useLocation();
  console.log(location);

  const trendsHandler = () => {
    return setSearchSuggestion(!searchSuggestion);
  };
  return (
    <div className="header homePage-header">
      <input
        placeholder="Search"
        className="search"
        onClick={() => trendsHandler()}
        onChange={(e) => {
          filterDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
      />
      <AiOutlineSearch className="search-icon" />
      <Link to="/" className="nav-brand-link">
        <div className="brand-name">
          Zev
          <BsSearch className="brand-icon" />{" "}
        </div>{" "}
      </Link>

      {location.pathname === "/" && (
        <Link to="/product">
          {" "}
          <div className="shpbtn">Shop now</div>
        </Link>
      )}

      {location.pathname === "/" && searchSuggestion && <SearchSuggestion />}
    </div>
  );
};

export default Header;
