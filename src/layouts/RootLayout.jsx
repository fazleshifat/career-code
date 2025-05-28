import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <section className='dark:bg-gray-700'>

            <Navbar></Navbar>
            <section className='max-w-7xl mx-auto min-h-[90vh]'>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </section>

    );
};

export default RootLayout;