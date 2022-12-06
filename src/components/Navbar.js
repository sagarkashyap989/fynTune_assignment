import React from 'react'
import {Link } from "react-router-dom"
import SearchBox from "./searchBox"
// import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
const Navbar = () => {
  return (
    <header className='navbar '>
    <div className='navbar__title navbar__item float-left'>Shops</div>
    <div className='navbar__item'>
        <Link to="/"> List</Link>
    </div>
    <div className='navbar__item'>
       <Link to="/add-shop"> Add Shop</Link>
           </div>    
<SearchBox />
</header>
  )
}

export default Navbar