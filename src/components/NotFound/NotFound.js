import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../images/error404.png';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <div className='text-center w-1/2'>
                <div className='my-[1rem]'><img className='w-full' src={error404} alt="not found" /></div>
                <Link to='/'><button className='bg-teal-300 hover:bg-teal-400 mt-6 mb-12 font-bold px-[1rem] py-[0.5rem] active:ring ring-teal-400 ring-offset-2 rounded-md text-lg text-indigo-700 hover:text-lime-100'>Back to Home Page</button></Link>
            </div>
        </div>
    );
};

export default NotFound;