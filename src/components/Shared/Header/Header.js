import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                <Link to='/' state={{ from: location }}>Home</Link>
                <Link to='/checkout' state={{ from: location }}>Checkout</Link>
                <Link to='/blogs' state={{ from: location }}>Blogs</Link>
                <Link to='/about' state={{ from: location }}>About</Link>
                <Link to='/login' state={{ from: location }}>Log in</Link>
                <Link to='/register' state={{ from: location }}>Register</Link>
            </nav>
        </header>
    );
};

export default Header;