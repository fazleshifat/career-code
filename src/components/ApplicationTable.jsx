import React, { use } from 'react';
import TableRow from './TableRow';
import { motion } from 'framer-motion';

const ApplicationTable = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-extrabold text-center text-indigo-600 dark:text-indigo-300 mb-8"
            >
                So far Applications: {applications.length}
            </motion.h1>

            <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900">
                <table className="table table-zebra w-full text-sm lg:text-base">
                    <thead className="bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-white">
                        <tr>
                            <th>#</th>
                            <th>Applicant Name</th>
                            <th>Job Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                        {applications.map((application, index) => (
                            <motion.tr
                                key={application._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors"
                            >
                                <TableRow
                                    index={index}
                                    application={application}
                                />
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ApplicationTable;
