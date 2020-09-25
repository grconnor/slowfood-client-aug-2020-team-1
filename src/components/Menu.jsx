import React, { Component } from 'react'
import { getProducts } from '../modules/products'
import { createOrder, updateOrder } from '../modules/orders'


class Menu extends Component {
  state = {
    menu: [],
    orderResponse: {}
  }

  componentDidMount = async () => {
    const products = await getProducts()
    this.setState({ menu: products })
  }

  addToOrder = async (event) => {
    let productId = event.target.parentElement.dataset.id
    let result;
    if (this.state.orderId) {
      result = await updateOrder(productId, this.state.orderId)
    } else {
      result = await createOrder(productId)
    }

    this.setState({ 
      orderResponse: { id: productId, message: result.message },
      orderId: result.order_id
    })
  }

  render() {
    const menu = this.state.menu;
    const authenticted = this.props.authenticted;

    return (
      <>
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
