import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 dark:bg-gray-900 min-h-[90vh] px-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    {/* banner image 1 */}
                    <motion.img
                        animate={
                            {
                                y: [20, 100, 20],
                                transition: { duration: 5, repeat: Infinity },

                            }}
                        src='/assets/banner-1.jpg'
                        className="max-w-md rounded-lg shadow-2xl w-full rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 dark:border-white border-indigo-400"
                    />
                    {/* banner img 2 */}
                    <motion.img
                        animate={
                            {
                                x: [50, 100, 50],
                                transition: { duration: 10, delay: 2, repeat: Infinity },

                            }}
                        src='/assets/banner-2.jpg'
                        className="max-w-sm rounded-lg shadow-2xl w-full rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 dark:border-white border-indigo-400 mx-auto"
                    />
                </div>
                <div className='flex-1 text-gray-900 dark:text-gray-300'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 2 } }} className="text-5xl font-bold">Easiest way to find
                        <motion.span
                            animate={{
                                color: ['#ff5733', '#33ff33', '#8a33ff'],
                                transition: { duration: 2, repeat: Infinity }
                            }}> Jobs</motion.span>!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;