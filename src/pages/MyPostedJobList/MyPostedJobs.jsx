import React, { Suspense, use } from 'react';
import Spinner from '../../components/Spinner';
import JobList from './JobList';
import { myPostedJobsPromise } from '../../api/jobsApi';
import { AuthContext } from '../../contexts/AuthContext';

const MyPostedJobs = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <h1>My Posted Jobs:</h1>
            <Suspense fallback={<Spinner></Spinner>}>
                <JobList myPostedJobsPromise={myPostedJobsPromise(user?.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;