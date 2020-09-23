import React, { Component } from "react";
import axios from "axios";

class ProductsList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchProductData();
  }

  async fetchProductData() {
    let productData = await axios.get("/products");
    
    this.setState({ products: productData.data.products });
  }

  render() {
    let productsList;
    if (this.state.products !== []) {
      productsList = this.state.products.map((product) => {
        return <div data-cy={`product-${product.id}`} key={product.id}></div>;
      });
    }
    return <div>{produgictsList}</div>;

    }
}

export default ProductsList;
