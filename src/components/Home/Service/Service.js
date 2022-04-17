import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Service = (props) => {
    const { name, price, description, image } = props.data;
    const location = useLocation();

    return (
        <div className='border border-solid border-slate-300 hover:outline outline-teal-300 outline-4 shadow-lg shadow-slate-400 rounded-lg'>
            <div className='p-4'><img className='rounded-t-lg w-full' src={image} alt={name} /></div>
            <hr />
            <div className='p-4'>
                <div className='h-40'>
                    <h3 className='font-medium text-xl text-slate-700'>{name}</h3>
                    <h4 className='font-medium my-2 text-slate-600'>Price: {price}</h4>
                    <p className='text-sm text-slate-500'>{description}</p>
                </div>
                <Link to='/checkout' state={{ from: location }}><button className='bg-teal-300 hover:bg-teal-400 font-semibold p-2 active:ring ring-offset-2 ring-teal-400 rounded-lg text-indigo-600'>Check it out <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>

        </div>
    );
};

export default Service;