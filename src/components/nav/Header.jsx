import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuIsOpen(!menuIsOpen) 
    }

  return (
    <>
        <div id="topnav">
            <div id="logo">
                <Link to="/">Ciarans Albums</Link>
            </div>

            {/* Desktop Menu, only appears on large screens */}
            <ul id="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

            {/* Hamburger icon, only shows on small screens */}
            <div id="menu-container">
                <div id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                    <List id="hamburger-icon"/>
                </div>
            </div>
        </div>

        {/* curly barckets allow me to go into JS */}
        {/* giving the mobile menu our close method of toggleMobileMenu as a prop */}
        {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header