import React, { use } from 'react';
import TableRow from './TableRow';
import MyApplications from './MyApplications';

const ApplicationTable = ({ myApplicationsPromise }) => {

    const applications = use(myApplicationsPromise);

    return (
        <div className="overflow-x-auto dark:bg-base-100 my-5">

            <h1 className='text-xl font-bold text-red-500 text-center my-5'>So far applications: {applications.length}</h1>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <p>Serial</p>
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        applications.map((application, index) => (
                            <TableRow
                                key={application._id}
                                index={index}
                                application={application}
                            ></TableRow>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationTable;