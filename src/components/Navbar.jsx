import React from 'react'
import { NavLink } from 'react-router-dom'
import './innerCss/navbar.css'

const Navbar = () => {
    return (
        <>
<div className='navWrap'>
        <div className='navbar'>

        {/* Navbar Menu section */}

        <h2 className='logo'>thefalsecode</h2>
        <div className='navMenu'>
           <NavLink to='/' className='nav_item'>Home</NavLink>
           <NavLink to='/products' className='nav_item'>Products</NavLink>
           <NavLink to='/services' className='nav_item'>Services</NavLink>
           <NavLink to='/about' className='nav_item'>About</NavLink>
           <NavLink to='/contact' className='nav_item'>Contact</NavLink>
        </div>



  </div>



            {/* HamBurger Menu section */}

            <div className='hamMenu'>
               <input type='checkbox' className='tick' />
               <div className='hamLine'>
                   <span className='line line1'></span>
                   <span className='line line2'></span>
                   <span className='line line3'></span>
               </div>

               <ul className='subMenu'>
            <li>  <NavLink to='/' className='nav_item'>Home</NavLink> </li> 
            <li>  <NavLink to='/products' className='nav_item'>Products</NavLink> </li> 
            <li>  <NavLink to='/services' className='nav_item'>Services</NavLink> </li> 
            <li>  <NavLink to='/about' className='nav_item'>About</NavLink> </li> 
            <li> <NavLink to='/contact' className='nav_item'>Contact</NavLink> </li> 
               </ul>
           </div>


</div>
        </>
    )
}

export default Navbar
