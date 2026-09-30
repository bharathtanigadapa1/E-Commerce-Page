import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
    return (
        <div>
            <ul className='navbar-container'>
                <li className='navbar-logo'>
                    <Link to="/login"> 🛒 E-Commerce</Link>
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
