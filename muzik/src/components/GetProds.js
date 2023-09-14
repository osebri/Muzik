import React, { useContext, useEffect, useState } from 'react';
import "./Latest.css";
import { CartContext } from '../contextProviders/CartContextProvider';

function GetProds({ limit }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3002/")
      .then((res) => res.json())
      .then((jsonRes) => {
        
        setAlbums(jsonRes);
      });
  }, []);

  const { addToCart } = useContext(CartContext);

  
  const subAlbums = albums.slice(0, limit);

  return (
    <div className='late_page'>
      {subAlbums.map((album) => (
        <div className='prod_cont' key={album.title}>
          <div className='late_prods'>
            <img className='pic' src={album.pic_url} alt={album.Artist} />
            <span className='title'>{album.title}</span>
            <span className='artist'>{album.Artist}</span>
            <div className='price_cont'>
              <button
                onClick={() =>
                  addToCart({
                    title: album.title,
                    price: album.price,
                    Artist: album.Artist,
                    pic_url: album.pic_url,
                  })
                }
                className='cart_button'
              >
                Add to cart
              </button>
              <span className='price'>${album.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetProds;
