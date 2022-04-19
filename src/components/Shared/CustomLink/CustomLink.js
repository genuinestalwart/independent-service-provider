import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={`md:border-b-2 md:border-t-4 border-t-transparent font-bold md:font-semibold md:px-[1rem] md:py-[0.5rem] ${match ? 'border-b-indigo-500 text-indigo-600' : 'border-b-transparent hover:text-lime-100'}`} to={to} {...props}>
            <div className='bg-sky-300 md:bg-transparent border-y-2 md:border-y-0 border-slate-200 text-center text-lg md:text-base py-[1rem] md:py-0'>{children}</div>
        </Link>
    );
};

export default CustomLink;
