import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCard = getStoredCard();

    for(const id in storedCard) {
      const addedProduct = products.find(product => product.id === id);
      console.log(id)
      console.log(addedProduct)
    }
  },[]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
    addToDb(product.id);
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product 
            key={product.id} 
            product={product} 
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop;