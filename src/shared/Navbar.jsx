import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import ToggleTheme from '../components/ToggleTheme';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {

    const { user, setUser, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut().then(() => {
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {user &&

            <>
                <li><NavLink to='/myApplications'>My Applications</NavLink></li>
                <li><NavLink to='/addJobs'>Add Jobs</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 dark:bg-indigo-700 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="text-xl font-semibold dark:text-gray-200">carrer_code</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 dark:text-gray-100">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <ToggleTheme className='space-x-4'></ToggleTheme>
                {!user ?
                    (
                        <>
                            <Link to='/signIn' className="btn">Sign In</Link>
                            <Link to='/signUp' className="btn">Sign Up</Link>
                        </>
                    ) :
                    (
                        <button onClick={handleSignOut} className='btn btn-error text-white'>Sign Out</button>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;