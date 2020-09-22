import axios from "axios";
import ProductsCard from "./ProductsCard";
import React, { Component } from "react";


class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("./src/data/products.json").then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  render() {
    const products = this.state.products;
    let productsList;

    if (products.length > 0) {
      productsList = products.map((products) => {
        return (
          <div id={"products-" + products.id} key={products.id}>
            <ProductsCard products={products} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
          </div>
          <div className="column">
            <h1 id="products-header" className="ui header">
              Menu
            </h1>
            <h4>Main dish</h4>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="ui stackable four column grid">{productsList}</div>
      </div>
    );
  }
}

export default Products;