import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={`border-b-2 border-t-4 border-t-transparent font-semibold px-4 py-2 ${match ? 'border-b-indigo-500 text-indigo-600' : 'border-b-transparent hover:text-lime-100'}`} to={to} {...props}>
            <div>{children}</div>
        </Link>
    );
};

export default CustomLink;
