import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='l_logo'>
            <Link to="/">BipinYadav</Link>
        </div>
        <div className='r_menu'>
            <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/service'>Service</Link>
         <Link to='/contact'>Contact</Link>
      </div>

    </div>
    </>
  )
}

export default Navbar;