import React, { useContext } from 'react';
import Header from '../components/Header';
import './Checkout.css';
import { CartContext } from '../contextProviders/CartContextProvider';
function Checkout() {
  const { cartProducts } = useContext(CartContext);
  const { addToCart, removeFromCart } = useContext(CartContext);

  
  const productQuantityMap = {};

  
  cartProducts.forEach((product) => {
    const { title } = product;
    if (productQuantityMap[title]) {
      productQuantityMap[title] += 1;
    } else {
      productQuantityMap[title] = 1;
    }
  });


  const calculateTotalPayment = () => {
    let total = 0;
    const productQuantityMap = {}; 

    cartProducts.forEach((product) => {
      const price = parseFloat(product.price);    
      const quantity = productQuantityMap[product.title] || 1;  
      total += price * quantity;      
      productQuantityMap[product.title] = quantity;
    });

    return total.toFixed(2); 
  };

  return (
    <div>
      <Header />
      <div className='ch_grid'>
        <div className='cart_container'>
          {!cartProducts?.length && <h1>Your cart is empty</h1>}
          {cartProducts?.length > 0 && (
            <div>
              <div className='wrapper'>
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
              </div>
              <div className='checkout_grid'>
                {Object.keys(productQuantityMap).map((title) => {
                  const product = cartProducts.find((p) => p.title === title);
                  const quantity = productQuantityMap[title];

                  return (
                    <div key={title} className='product_item'>
                      <div className='album'>
                        <div className='mini_container'>
                          <img src={product.pic_url} alt={title} /> <br />
                          <span>{title}</span>
                        </div>
                      </div>
                      <div className='inc'>
                        <button  onClick={() => addToCart({ title: product.title, price: product.price,
             Artist: product.Artist, pic_url: product.pic_url})} className='inc_button_add'>+</button>
                        <span className='qt'>{quantity}</span>
                        <button className='inc_button_rem' onClick={() => removeFromCart(product.title)}>-</button>
                      </div>
                      <span className='check_price'>$ {(product.price*quantity).toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
              <div className='total_payment'>
                <span>Total Payment: </span>
                <span>$ {calculateTotalPayment()}</span>
              </div>
            </div>
          )}
        </div>
        <div className='info'>
            <h1>Personal Informations</h1>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Surname'/>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Country'/>
            <input type='text' placeholder='Adress'/>
            <input type='text' placeholder='City'/>
            <input type='text' placeholder='Zipcode'/>
            <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
