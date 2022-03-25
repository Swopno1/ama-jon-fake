import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  return (
    <div>
      <h3>Order Summery</h3>
      <div className="cart-details">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${"1150"}</p>
        <p>Total Shipping Charge: ${"6"}</p>
        <p>Tax: ${"114"}</p>
        <p>Grand Total: ${"1559"}</p>
      </div>
    </div>
  )
}

export default Cart