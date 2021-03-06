import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Service = (props) => {
    const { name, price, description, image } = props.data;
    const location = useLocation();

    return (
        <div className='border-[1px] border-slate-300 mb-8 md:mb-0 hover:outline outline-teal-300 outline-4 rounded-lg shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400'>
            <div className='p-[1rem]'><img className='rounded-t-lg w-full' src={image} alt={name} /></div>
            <hr />
            <div className='p-[1rem]'>
                <div className='md:h-40'>
                    <h3 className='font-medium text-xl text-slate-700'>{name}</h3>
                    <h4 className='font-medium my-[0.5rem] text-slate-600'>Price: {price}</h4>
                    <p className='text-sm text-slate-500'>{description}</p>
                </div>
                <Link to='/checkout' state={{ from: location }}><button className='bg-teal-300 hover:bg-teal-400 font-semibold mt-[1rem] md:mt-0 p-[0.5rem] active:ring ring-offset-2 ring-teal-400 rounded-md text-indigo-600'>Check it out <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>

        </div>
    );
};

export default Service;