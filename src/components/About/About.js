import React from 'react';
import GS_logo from '../../images/GS_logo.png';
import aboutBG from '../../images/about-bg.jpg';

const About = () => {
    return (
        <section style={{ backgroundImage: `url(${aboutBG})` }} className="bg-no-repeat bg-cover flex justify-center">
            <div className='my-8 text-center text-slate-700 w-2/5'>
                <div className='mb-6'><img className='inline-block rounded-full w-2/5' src={GS_logo} alt="GS logo" /></div>
                <h2 className='font-semibold my-[1rem] text-3xl text-center'>Hello world!</h2>
                <p className='font-medium'>My name is <strong className='text-indigo-500'>Nasif Rahman</strong> aka <em className='font-semibold'>Genuine Stalwart</em>.<br />My <strong>Dream Destiny</strong> is to be an honest and faithful leader that the world has never seen before.<br />Besides, I have some other goals too, such as eliminating tobacco from Bangladesh and eliminating islamophobia from the world.</p>
                <p className='font-medium'>To fulfill my destiny, I want to create an organization which is supposed to be one of the most powerful organizations in the world like Alphabet Inc, Disney, Microsoft, Facebook etc.</p>
                <h3 className='font-semibold mt-[0.5rem] text-lg'>Wish me luck! 😉</h3>
            </div>
        </section>
    );
};

export default About;