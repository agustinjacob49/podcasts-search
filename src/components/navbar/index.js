import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader';

const Navbar = ({ isLoading = true }) => {
    return (
        <header>
            <nav className='navbar'>
               <Link className="navbar__title" to='/'> Podcaster</Link>
                { isLoading && <div className='navbar__loader'> <Loader /> </div>}
            </nav>
        </header>
    );
};

export default Navbar;