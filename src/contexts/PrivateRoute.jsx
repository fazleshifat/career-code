import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <span className='min-h-screen flex justify-center items-center loading loading-ring w-18 text-white'></span>

    }

    if (!user) {
        return <Navigate state={location.pathname} to='/signIn'></Navigate>
    }

    return children;
};

export default PrivateRoute;