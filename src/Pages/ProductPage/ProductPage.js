import React, { useContext } from "react";
import { FilterContext } from "../../Context/Context";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./ProductPage.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Siderbar/Sidebar";
import Rating from "../../Components/Rating/Rating";

const ProductPage = () => {
  const {
    products,
    filterState: { wishlist, byBrand, byPrice, byRating, bySearch },
    filterDispatch,
  } = useContext(FilterContext);

  const filteredData = () => {
    let sortedProducts = products;
    if (byBrand.length !== 0) {
      sortedProducts = sortedProducts.filter((prod) =>
        byBrand.includes(prod.category)
      );
    }
    if (byPrice.length !== 0) {
      byPrice === 50
        ? (sortedProducts = sortedProducts.filter(
            (prod) => prod.price < byPrice
          ))
        : (sortedProducts = sortedProducts.filter(
            (prod) => prod.price < 1000 && prod.price > 100
          ));
    }
    if (byRating.length !== 0) {
      sortedProducts = sortedProducts.filter((prod) =>
        byRating.includes(Math.round(prod.rating.rate))
      );
    }
    if (bySearch.length !== null) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(bySearch)
      );
    }

    return sortedProducts;
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="products-container">
        {filteredData().map((product) => {
          return (
            <div key={product.id} className="product-container">
              {wishlist.some((prod) => prod.id === product.id) ? (
                <AiFillHeart className="filled-heart-icon heart-icon"
                  onClick={() => {
                    filterDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: product,
                    });
                  }}
                />
              ) : (
                <AiOutlineHeart className="heart-icon"
                  onClick={() => {
                    filterDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    });
                  }}
                />
              )}

              <img alt="img" src={product.image} className="product-image" />

              <div>{product.title.split(" ").slice(0, 2).join(" ")} </div>
              <div>${product.price} </div>
              <div>
                
                <Rating rating={product.rating.rate} />

              </div>
              <button className="hide">View products </button>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
