import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const JobsSection = ({ jobsPromise }) => {
    const { user } = use(AuthContext);
    const jobs = use(jobsPromise);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
                    Latest <span className="text-indigo-600 dark:text-indigo-400">Job Openings</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <motion.div
                            key={job._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col justify-between"
                        >
                            {/* Company Logo */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={job.company_logo || job.companyLogo}
                                    alt="Company Logo"
                                    className="w-16 h-16 object-contain rounded-full border dark:border-white"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">{job.location}</p>
                                </div>
                            </div>

                            {/* Salary */}
                            <p className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                                Salary: {job.salaryRange?.min} - {job.salaryRange?.max} {job.salaryRange?.currency}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{job.description}</p>

                            {/* Requirements */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {job.requirements.map((req, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="badge badge-outline badge-accent text-xs py-1 px-2"
                                    >
                                        {req}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Email */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Send CV to: <span className="text-indigo-500 dark:text-indigo-300 font-semibold">{job.hr_email}</span>
                            </p>

                            {/* CTA Button */}
                            <div className="mt-auto pt-2 text-right">
                                <Link
                                    to={`/jobs/${job._id}`}
                                    className="btn btn-accent text-white shadow hover:scale-105 transition-transform duration-200"
                                >
                                    Show Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobsSection;
