import React, { Component } from 'react'
import { getProducts } from '../modules/products'
import { createOrder, updateOrder } from '../modules/orders'


class Menu extends Component {
  state = {
    menu: [],
    orderResponse: {},
    showOrder: false,
    currentOrder: {}
  }

  componentDidMount = async () => {
    const products = await getProducts()
    this.setState({ menu: products })
  }

  addToOrder = async (event) => {
    let productId = event.target.parentElement.dataset.id
    let result;
    if (this.state.currentOrder.id) {
      result = await updateOrder(productId, this.state.currentOrder.id)
    } else {
      result = await createOrder(productId)
    }

    this.setState({ 
      orderResponse: { id: productId, message: result.message },
      currentOrder: result.order
    })
  }

  render() {
    const menu = this.state.menu;
    const authenticted = this.props.authenticted;
    const order = this.state.currentOrder

    let currentOrder
    let viewOrder

    if (this.state.currentOrder.id) {
      viewOrder = <button onClick={() => this.setState({showOrder: true})}>View Order</button>
    }

    if (this.state.showOrder) {
      currentOrder = (
        <div data-cy="order-details">
          <p data-cy="order-total">Total: {order.total}</p>
          <ui>
          {order.products.map(product => {
            return <li>{product.amount}x {product.name}</li>
          })}
          </ui>
        </div>
      )
    }

    return (
      <>
        {viewOrder}
        {currentOrder}
        { menu.length > 0 && menu.map(item => {
          return (
            <>
              <div data-id={item.id} data-cy={"product-" + item.id} id={"product-" + item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                { authenticted && <button onClick={this.addToOrder}>Add to order</button>}
                { item.id == parseInt(this.state.orderResponse.id) && (
                  <p id="message">{this.state.orderResponse.message}</p>
                )}
              </div>
            </>
          );
        })}
      </>
    )
  }
}

export default Menu
