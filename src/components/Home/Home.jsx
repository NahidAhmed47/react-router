import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/service'}>Service</Link>
            <Link to={'/contract'}>Contract</Link>
            <Link to={'/about'}>About us</Link>
        </nav>
        <div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Home;