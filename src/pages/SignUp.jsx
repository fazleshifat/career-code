import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottieAnimation from '../../public/assets/Animation - 1748189814267.json'
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {

    const { createUser, setUser } = use(AuthContext);


    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, name, password)

        // create user at Firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.code)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie animationData={lottieAnimation} loop={true} className='min-w-9/12' />
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <form onSubmit={handleRegistration}>
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Email" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;