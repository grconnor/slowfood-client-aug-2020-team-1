import axios from "axios";
import React, { Component } from "react";
import { fetchProductData } from "../modules/products";

class ProductsList extends Component {
  state = {
    products: [],
    message: {}
  };

  componentDidMount = async () => {
    const products = await fetchProductData();
    this.setState({ products: products });
  };

   addToOrder = async (event) => {
    let id = event.target.parentElement.dataset.id
    let result = await axios.post('http://localhost:3000/api/orders', { id: id } )
    this.setState({ message: {id: id, message: result.data.message}})
  }

  render() {
    let productsList;
    if (this.state.products !== []) {
      productsList = this.state.products.map((product) => {
        return (
          <div data-cy={"product-" + product.id} key={product.id}>
            <h3 data-cy="name">{product.name}</h3>
            <p data-cy="price">{product.price}</p>
            <p data-cy="description">{product.description}</p>
            <button onClick={this.addToOrder.bind(this)}>Add to order</button>
         {parseInt(this.state.message.id) === product.id &&
         <p data-cy="message">{this.state.message.message}</p>}
          </div>
        );
      });
    }

    return (
      <div>
        <h1 data-cy="header">Menu</h1>
        {productsList}
      </div>
    );
  }
}

export default ProductsList;
