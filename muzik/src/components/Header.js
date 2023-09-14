import React from 'react'
import './Header.css'
import AlbumIcon from '@mui/icons-material/Album';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to="/"><div className='logo'>
      { <AlbumIcon className='logo_img' sx={{ fontSize: 60 }} />  }
        <span className='header_logo'>Muzik.</span>
        </div></Link>
        <div className='search'>
        <input className='header_search' type='text'/>
        <SearchIcon className='search_ic' sx={{ fontSize: 30 }}  />
        </div>
        <div className='navbar'>
      <Link to="/products"><span className='nav_element' >Products</span></Link>
      <Link to="/about"><span className='nav_element'>About</span></Link>
           <Link to='/checkout'> <ShoppingCartIcon
            className='nav_element' sx={{ fontSize: 30 }}/></Link>
        </div>
    </div>
  )
}

export default Header