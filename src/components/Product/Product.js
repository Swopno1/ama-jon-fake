import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
  // const {product, handleAddToCart} = props;
  const { name, img, price, seller, ratings } = product;
  
  return (
    <div className='product-card'>
      <img src={img} alt={name} />
      <div className="product-info">
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'>Price: ${price}</p>
        <div className="other-info">
          <p className='product-manufacturer'><small>Manufacturer: {seller}</small></p>
          <p className='product-ratings'><small>Rating: {ratings}</small></p>
        </div>
      </div>
      <button className='btn-cart' onClick={() => handleAddToCart(product)}>
        <p className='btn-text'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Product