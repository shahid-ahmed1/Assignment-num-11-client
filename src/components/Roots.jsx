import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;