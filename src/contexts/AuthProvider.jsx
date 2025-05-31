import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);




    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
                if (user?.email) {
                    const userData = { email: user.email };
                    axios.post('http://localhost:3000/jwt', userData, {
                        withCredentials: true  // must have to provide whenever we want to set cookies
                    })
                        .then(res => {
                            console.log('token after jwt', res.data)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
                console.log(user)

            } else {
                // User is signed out
                // ...
            }
        });

        return unSubscribe;


    }, [user])

    const AuthInfo = {
        loading,
        setLoading,
        user,
        setUser,
        createUser,
        signInUser,
        userSignOut
    }



    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;