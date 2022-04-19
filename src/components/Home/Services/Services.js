import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [fakeData, setData] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <section className='md:block px-8 md:px-16 pt-8'>
            <h2 className='font-semibold text-3xl text-center text-slate-700'>Available Services</h2>

            <div className='gap-12 md:grid grid-cols-4 pt-8 pb-[1rem]'>
                {
                    fakeData.map(service => <Service data={service} key={fakeData.indexOf(service)}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;