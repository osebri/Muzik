
import './Featured.css'
import { CartContext } from '../contextProviders/CartContextProvider';
import React, { useContext } from 'react';
function Featured() {
  const { cartProducts } = useContext(CartContext);
  const { addToCart, removeFromCart } = useContext(CartContext);


  return (
    <div className='featured'>
        <div className='feat_discription'>
        <h1 className='title'>Did you know that there's a tunnel under Ocean Blvd ?</h1>
        <span>Did you know that there's a tunnel under Ocean Blvd
             is the ninth studio album from acclaimed singer-songwriter Lana Del Rey,
            comprising 16 tracks and interludes with features including Father John Misty, 
            Tommy Genesis, Jon Batiste, Bleachers and more. It follows the prolific artist's 2021 albums
             Chemtrails Over The Country Club and Blue Banisters. 
             Standard heavyweight black double vinyl in gatefold sleeve.</span>
        <div className='button_containers'>
        <button className='addToCartButton' onClick={() => addToCart({ title: `Did you know that there's a tunnel under Ocean Blvd ?`, 
          price: "39.99",
             Artist: "Lana del Ray", pic_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Lana_Del_Rey_-_Did_You_Know_That_There%27s_a_Tunnel_Under_Ocean_Blvd.png/220px-Lana_Del_Rey_-_Did_You_Know_That_There%27s_a_Tunnel_Under_Ocean_Blvd.png"})}>
              Add to cart</button>    
        <button className='learnMoreButton'>Learn More</button>
        </div>
        </div>
        <div className='col_container'>
        <img className='feat_image' src='https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/p/l/ply59191-01.png' alt='' />
        </div>
    </div>
  )
}

export default Featured