import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <section>
            <div className='w-full' style={{ height: 'calc(100vh - 5rem)' }}><img className='h-full w-full' src={banner} alt="banner" /></div>
        </section>
    );
};

export default Banner;