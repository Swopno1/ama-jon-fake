import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { deleteShoppingCart } from '../../utilities/fakedb';

const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart) {
    quantity = quantity + product.quantity;
    total = total + (product.price * product.quantity);
    shipping = shipping + product.shipping
  }

  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + tax*1).toFixed(2);

  return (
    <div className='cart'>
      <h3>Order Summery</h3>
      <div className="cart-details">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p>Grand Total: ${grandTotal}</p>
      </div>
      <button className='btn-clear' onClick={deleteShoppingCart}>
        <p className='btn-text'>Clear Cart</p>
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <button className='btn-review'>
        <p className='btn-text'>Review Order</p>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Cart