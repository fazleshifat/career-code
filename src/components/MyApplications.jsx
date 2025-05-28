import React, { Suspense, use, useContext } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationTable from './ApplicationTable';
import { AuthContext } from '../contexts/AuthContext';
import { myApplicationsPromise } from '../api/applicationsApi';


const MyApplications = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='min-h-[90vh] flex flex-col justify-center items-center'>
            <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={'your data is loading'}>
                <ApplicationTable
                    myApplicationsPromise={myApplicationsPromise(user.email)}>

                </ApplicationTable>
            </Suspense>
        </div>
    );
};

export default MyApplications;