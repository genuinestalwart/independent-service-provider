import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CustomLink from '../CustomLink/CustomLink';

const Header = ({ registered, user }) => {
    const location = useLocation();
    const [expand, setExpand] = useState(false);
    const { logOut } = useAuth();

    return (
        <header className='md:bg-teal-400 md:flex md:h-20 items-center justify-between md:px-16'>
            <div className='bg-teal-400 flex h-20 items-center justify-between'>
                <div className='flex items-center'>
                    <div className='md:mr-2 w-16'><img className='w-full' src="./logo.png" alt="logo" /></div>
                    <h1 className='font-bold text-3xl md:text-4xl text-slate-800'>Master Shukumar</h1>
                </div>

                <button onClick={() => setExpand(!expand)} className='border-[1px] border-slate-400 font-bold h-12 md:hidden mr-3 active:ring ring-indigo-400 rounded-md text-2xl text-indigo-500 w-12'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
            </div>

            <nav className={`md:flex ${expand ? '' : 'hidden'}`}>
                <CustomLink to='/' state={{ from: location }}>Home</CustomLink>
                <CustomLink to='/checkout' state={{ from: location }}>Checkout</CustomLink>
                <CustomLink to='/blogs' state={{ from: location }}>Blogs</CustomLink>
                <CustomLink to='/about' state={{ from: location }}>About</CustomLink>

                {
                    user ? <button className='bg-sky-300 md:bg-transparent border-y-2 md:border-b-0 md:border-t-2 border-slate-200 md:border-transparent font-bold md:font-semibold md:px-[1rem] md:py-[0.5rem] hover:text-lime-100 text-center text-lg md:text-base py-[1rem] w-full' onClick={() => logOut('/')}><div>Log out</div></button> : <CustomLink to='/register' state={{ from: location }}>{registered ? 'Log in' : 'Register'}</CustomLink>
                }
            </nav>
        </header>
    );
};

export default Header;