import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const location = useLocation();
    const { user, logOut } = useAuth();

    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
            <nav style={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                <Link to='/' state={{ from: location }}>Home</Link>
                <Link to='/checkout' state={{ from: location }}>Checkout</Link>
                <Link to='/blogs' state={{ from: location }}>Blogs</Link>
                <Link to='/about' state={{ from: location }}>About</Link>
                {
                    user && auth.currentUser ? <button onClick={logOut}>Log out</button> : <Link to='/login' state={{ from: location }}>Log in</Link>
                }
                {
                    user && auth.currentUser ? <Link to='/user' state={{ from: location }}><FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon></Link> : <Link to='/register' state={{ from: location }}>Register</Link>
                }
            </nav>
        </header>
    );
};

export default Header;