import React from "react";

const ProductsCard = ({ products }) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={products.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{products.name}</h3>

          <div class="description">{products.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;