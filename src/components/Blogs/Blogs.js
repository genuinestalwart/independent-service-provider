import React from 'react';

const Blogs = () => {
    return (
        <section className='gap-8 md:gap-12 grid grid-cols-1 md:grid-cols-3 p-8 md:p-12 text-slate-600'>
            <div className='bg-indigo-300 border-[1px] border-slate-300 hover:outline outline-teal-300 outline-4 p-[1rem] rounded-lg shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400'>
                <h2 className='font-semibold leading-relaxed py-[0.5rem] text-xl'>What is the difference between <span className='text-indigo-500'>authorization</span> and <span className='text-indigo-500'>authentication</span>?</h2>
                <p className='font-semibold py-[0.5rem]'>Authentication is the process of verifying a user where authorization is the process of determining what resources a user can access. Authentication is visible and sometimes customizable by the user. But authorization occurs behind the scenes and can not be customized by the user.</p>
            </div>

            <div className='bg-indigo-300 border-[1px] border-slate-300 hover:outline outline-teal-300 outline-4 p-[1rem] rounded-lg shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400'>
                <h2 className='font-semibold leading-relaxed py-[0.5rem] text-xl'>Why am I using <span className='text-indigo-500'>firebase</span>? What are the alternatives of it?</h2>
                <p className='font-semibold py-[0.5rem]'>The reason I'm using firebase is for its authentication and hosting features. Some of the most common alternatives of firebase are: AWS Amplify, Flutter, Heroku, Parse, Kuzzle, Back4App, Auth0, MongoDB etc.</p>
            </div>

            <div className='bg-indigo-300 border-[1px] border-slate-300 hover:outline outline-teal-300 outline-4 p-[1rem] rounded-lg shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1)] shadow-slate-400'>
                <h2 className='font-semibold leading-relaxed py-[0.5rem] text-xl'>What other services does <span className='text-indigo-500'>firebase</span> provide besides authentication?</h2>
                <p className='font-semibold py-[0.5rem]'>Firebase is an application development software createded by Google for creating mobile and web applications. It offers a variety of services, including analytics, authentication, realtime database, storage, functions, machine learning, hosting, crashlytics, performance montioring etc.</p>
            </div>
        </section>
    );
};

export default Blogs;