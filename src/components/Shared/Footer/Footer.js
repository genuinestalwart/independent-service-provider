import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className='bg-gray-900 p-12 text-teal-100 text-center'>
            <div>
                <Link className='font-medium px-[1rem] py-[0.5rem] hover:text-teal-500' to='/' state={{ from: location }}>Home</Link>
                <Link className='font-medium px-[1rem] py-[0.5rem] hover:text-teal-500' to='/checkout' state={{ from: location }}>Checkout</Link>
                <Link className='font-medium px-[1rem] py-[0.5rem] hover:text-teal-500' to='/blogs' state={{ from: location }}>Blogs</Link>
                <Link className='font-medium px-[1rem] py-[0.5rem] hover:text-teal-500' to='/about' state={{ from: location }}>About</Link>
            </div>

            <div className='my-6'>
                <button><FontAwesomeIcon className='bg-teal-500/25 hover:bg-teal-500/75 h-6 mx-6 p-[0.5rem] rounded-full text-xl w-6' icon={faYoutube}></FontAwesomeIcon></button>
                <button><FontAwesomeIcon className='bg-teal-500/25 hover:bg-teal-500/75 h-6 mx-6 p-[0.5rem] rounded-full text-xl w-6' icon={faFacebook}></FontAwesomeIcon></button>
                <button><FontAwesomeIcon className='bg-teal-500/25 hover:bg-teal-500/75 h-6 mx-6 p-[0.5rem] rounded-full text-xl w-6' icon={faInstagram}></FontAwesomeIcon></button>
            </div>

            <p className=''>&copy;2022 <strong className='text-white'>Master Shukumar</strong>, all rights reserved.</p>
        </footer>
    );
};

export default Footer;