import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myself from '../../../images/myself.jpg';

const Extra = () => {
    return (
        <section className='flex p-16'>
            <div className='px-8 w-3/5'><img className='rounded-xl w-full' src={myself} alt="who am i" /></div>

            <div className='px-8 py-20 w-2/5'>
                <h3 className='font-semibold text-2xl text-slate-700'>Who am I?</h3>
                <p className='my-[1rem] text-slate-900'>My name is <strong>Shukumar</strong>. I'm a gaming youtuber. I like to play games and give reviews for different gaming products. I mostly play minecraft and smashkarts. If you want to play with me, join my discord server.</p>
                <button className='bg-teal-300 hover:bg-teal-400 font-bold p-[0.5rem] active:ring ring-offset-2 ring-teal-400 rounded-md text-indigo-600'>Join my discord server! <FontAwesomeIcon className='ml-1' icon={faArrowUpRightFromSquare}></FontAwesomeIcon></button>
            </div>
        </section>
    );
};

export default Extra;