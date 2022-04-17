import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAuth from '../../../hooks/useAuth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const location = useLocation();
    const { user, logOut } = useAuth();

    return (
        <header className='bg-teal-400 flex h-20 items-center justify-between px-16'>
            <div className='flex items-center'>
                <div className='mr-2 w-16'><img className='w-full' src="./logo.png" alt="logo" /></div>
                <h1 className='font-bold text-4xl text-slate-800'>Master Shukumar</h1>
            </div>

            <nav className='flex'>
                <CustomLink to='/' state={{ from: location }}>Home</CustomLink>
                <CustomLink to='/checkout' state={{ from: location }}>Checkout</CustomLink>
                <CustomLink to='/blogs' state={{ from: location }}>Blogs</CustomLink>
                <CustomLink to='/about' state={{ from: location }}>About</CustomLink>

                {
                    user && auth.currentUser ? <button className='border-b-2 border-transparent font-semibold px-4 py-2 hover:text-blue-600' onClick={logOut}><div>Log out</div></button> : <CustomLink to='/login' state={{ from: location }}>Log in</CustomLink>
                }

                {
                    user && auth.currentUser ? <CustomLink to='/user' state={{ from: location }}><FontAwesomeIcon className=' text-2xl' icon={faCircleUser}></FontAwesomeIcon></CustomLink> : <CustomLink to='/register' state={{ from: location }}>Register</CustomLink>
                }
            </nav>
        </header>
    );
};

export default Header;