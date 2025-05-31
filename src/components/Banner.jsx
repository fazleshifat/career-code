import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="hero min-h-[90vh] bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-indigo-800 dark:to-gray-900 px-6 py-12">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-12 max-w-7xl mx-auto w-full">
                
                {/* Image Section */}
                <div className="flex-1 flex flex-col gap-8 items-center lg:items-end relative">
                    {/* Banner Image 1 */}
                    <motion.img
                        animate={{
                            y: [0, -20, 0],
                            transition: { duration: 4, repeat: Infinity },
                        }}
                        src="/assets/banner-1.jpg"
                        alt="Job seeker"
                        className="w-64 lg:w-80 rounded-t-4xl rounded-br-4xl border-l-[6px] border-b-[6px] border-indigo-400 dark:border-white shadow-2xl object-cover z-10"
                    />

                    {/* Banner Image 2 */}
                    <motion.img
                        animate={{
                            x: [0, 20, 0],
                            transition: { duration: 6, repeat: Infinity },
                        }}
                        src="/assets/banner-2.jpg"
                        alt="Job finder"
                        className="w-48 lg:w-64 rounded-t-4xl rounded-br-4xl border-l-[6px] border-b-[6px] border-indigo-400 dark:border-white shadow-2xl object-cover -mt-12 lg:-mt-24 z-0"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left space-y-6 text-gray-900 dark:text-gray-200">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                        Easiest way to find&nbsp;
                        <motion.span
                            animate={{
                                color: ['#6366F1', '#EC4899', '#10B981'],
                                transition: { duration: 3, repeat: Infinity, repeatType: "loop" },
                            }}
                            className="inline-block"
                        >
                            Jobs!
                        </motion.span>
                    </motion.h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Discover thousands of job opportunities tailored to your skills.
                        Apply with ease, track your progress, and level up your career from anywhere.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary text-white shadow-lg transition duration-300"
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
