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
  }

  render() {
    return <div></div>;
  }
}

export default ProductsList;
