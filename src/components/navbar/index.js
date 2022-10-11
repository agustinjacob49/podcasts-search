import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoaderContext from '../../utils/context/loaderContext';
import Loader from '../loader';

const Navbar = () => {

    const isLoading = useContext(LoaderContext);

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