import React, { Suspense, useContext } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationTable from './ApplicationTable';
import { AuthContext } from '../contexts/AuthContext';
import { myApplicationsPromise } from '../api/applicationsApi';
import { motion } from 'framer-motion';

const MyApplications = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="min-h-[90vh] bg-base-100 dark:bg-gray-900 px-4 py-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10">

                {/* Application stats with fade-in */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                >
                    <ApplicationsStats />
                </motion.div>

                {/* Table section with suspense fallback */}
                <Suspense
                    fallback={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-lg text-indigo-500"
                        >
                            Your data is loading...
                        </motion.div>
                    }
                >
                    <ApplicationTable myApplicationsPromise={myApplicationsPromise(user.email)} />
                </Suspense>
            </div>
        </section>
    );
};

export default MyApplications;
