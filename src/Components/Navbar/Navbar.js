import React from 'react';
import './Navbar.css'

const Navbar = ({cart}) => {
    return (
        <div>
            <div className='container d-flex nav'>
            <li>Home</li>
            <li>Link</li>
            <li>Products</li>
            <li>Cart <sup>{cart}</sup></li>
            <li>About</li>
            </div>
        </div>
    );
};

export default Navbar;