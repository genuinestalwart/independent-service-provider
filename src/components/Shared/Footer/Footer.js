import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className='bg-gray-900 p-12 text-teal-100 text-center'>
            <div className='mb-4'>
                <Link className='font-medium px-4 py-2 hover:text-teal-500' to='/' state={{ from: location }}>Home</Link>
                <Link className='font-medium px-4 py-2 hover:text-teal-500' to='/checkout' state={{ from: location }}>Checkout</Link>
                <Link className='font-medium px-4 py-2 hover:text-teal-500' to='/blogs' state={{ from: location }}>Blogs</Link>
                <Link className='font-medium px-4 py-2 hover:text-teal-500' to='/about' state={{ from: location }}>About</Link>
            </div>
            <p className=''>&copy;2022 <strong className='text-white'>Master Shukumar</strong>, all rights reserved.</p>
        </footer>
    );
};

export default Footer;