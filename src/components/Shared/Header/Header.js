import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CustomLink from '../CustomLink/CustomLink';

const Header = ({ registered, user }) => {
    const location = useLocation();
    const { logOut } = useAuth();

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
                    user ? <button className='border-t-2 border-transparent font-semibold px-[1rem] py-[0.5rem] hover:text-lime-100' onClick={() => logOut('/')}><div>Log out</div></button> : <CustomLink to='/register' state={{ from: location }}>{registered ? 'Log in' : 'Register'}</CustomLink>
                }
            </nav>
        </header>
    );
};

export default Header;