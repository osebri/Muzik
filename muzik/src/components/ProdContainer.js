import React from 'react'
import { useState, useEffect } from 'react'
import './prodContainer.css'
function ProdContainer() {

    const [albums,setAlbums]=useState([{
        title:"",
        Artist:"",
        description:"",
        price:"",
        pic_url:""
      }])
      useEffect(() => {
       fetch("http://localhost:3002/").then((res)=>res.json()).then((jsonRes)=>setAlbums(jsonRes))
      })
      
  return (
    <div className='conatainer-6'>
    <div className='conatainer-5'>
        {
            
        albums.map((album) => {
            return(
        <div className='late_prods'>
        <img className='pic' src={album.pic_url} />
        {/*<span className='title'>{album.title}</span>
        <span className='artist'>{album.Artist}</span>
        <span className='price'>{album.price}</span>*/}
        </div> )})
        }
    </div> 
    </div> )

    }
export default ProdContainer

       
