import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import ToggleTheme from '../components/ToggleTheme';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, setUser, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => setUser(null))
            .catch((error) => {
                // Handle error (optional)
            });
    };

    const Links = (
        <>
            <li>
                <NavLink to="/" className="hover:text-indigo-600 transition-colors duration-200">Home</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/myApplications" className="hover:text-indigo-600 transition-colors duration-200">My Applications</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addJobs" className="hover:text-indigo-600 transition-colors duration-200">Add Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myPostedJobs" className="hover:text-indigo-600 transition-colors duration-200">My Posted Jobs</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <>
            {/* Bottom padding to prevent content behind mobile nav */}
            <div className="pb-16 md:pb-0"></div>

            <div className="navbar bg-white/80 backdrop-blur-md dark:bg-indigo-900/60 dark:text-white shadow-md fixed bottom-0 left-0 right-0 z-50 md:sticky md:top-0 transition-all">
                <div className="flex flex-1 justify-between items-center w-full max-w-7xl mx-auto px-4">
                    {/* Start: Brand + Dropdown for mobile */}
                    <div className="flex items-center gap-2">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white dark:bg-indigo-800 rounded-xl w-52"
                            >
                                {Links}
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
                        >
                            career<span className="text-indigo-700 dark:text-indigo-300">_code</span>
                        </Link>
                    </div>

                    {/* Center: Horizontal menu for large screen */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-8 font-medium">
                            {Links}
                        </ul>
                    </div>

                    {/* End: Theme + Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <ToggleTheme />
                        {!user ? (
                            <>
                                <Link to="/signIn" className="btn btn-outline btn-sm hover:bg-indigo-500 hover:text-white transition duration-200">
                                    Sign In
                                </Link>
                                <Link to="/signUp" className="btn btn-primary btn-sm text-white shadow-md">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={handleSignOut}
                                className="btn btn-error btn-sm text-white shadow-md hover:scale-105 transition-transform"
                            >
                                Sign Out
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
