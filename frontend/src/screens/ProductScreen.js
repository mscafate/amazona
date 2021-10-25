import React from "react";
import data from "../data";
import Product from "../components/Product";

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div className="row">
      <div className="col-2">
        <img src={Product.image} alt={Product.name} />
      </div>
      <div className="col-1"></div>
      <div className="col-1"></div>
    </div>
  );
}

export default ProductScreen;
