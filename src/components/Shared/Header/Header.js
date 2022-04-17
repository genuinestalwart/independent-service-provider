import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                <Link to='/'>Home</Link>
                <Link to='/checkout'>Checkout</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </header>
    );
};

export default Header;