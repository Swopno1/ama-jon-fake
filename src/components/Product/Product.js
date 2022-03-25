import React from 'react';
import './Product.css'

const Product = (props) => {
  const { id, name, img, price, seller, ratings } = props.product;
  
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
      <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)}>
        <p>Add to Cart</p>
      </button>
    </div>
  )
}

export default Product