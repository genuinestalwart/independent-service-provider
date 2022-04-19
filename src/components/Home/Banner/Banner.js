import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <section className='md:block'>
            <div className='bg-no-repeat bg-cover w-full' style={{ backgroundImage: `url(${banner})`, height: 'calc(100vh - 5rem)' }}></div>
        </section>
    );
};

export default Banner;