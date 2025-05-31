import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { motion } from 'framer-motion';

const JobDetails = () => {
    const job = useLoaderData();

    return (
        <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-3xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-900"
                    >
                        <img
                            src={job.company_logo}
                            alt="Company Logo"
                            className="max-w-[180px] w-full h-auto rounded-xl border border-indigo-400 dark:border-white"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="lg:w-1/2 p-8 space-y-6 text-gray-900 dark:text-gray-100">
                        <div>
                            <h1 className="text-3xl font-bold mb-1">{job.category}</h1>
                            <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">{job.company}</h2>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>

                        <div className="flex flex-wrap gap-3">
                            {job.requirements?.map((req, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="badge badge-outline badge-accent text-sm"
                                >
                                    {req}
                                </motion.span>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link
                                to={`/jobApply/${job._id}`}
                                className="btn btn-warning text-white text-lg shadow-lg hover:scale-105 transition-transform"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
