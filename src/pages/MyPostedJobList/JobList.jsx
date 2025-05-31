import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ myPostedJobsPromise }) => {
    const jobs = use(myPostedJobsPromise);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6">
                Jobs Created by You: {jobs?.length}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow-md">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-200 text-base-content uppercase text-sm font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Job Position</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id} className="hover">
                                <td>{index + 1}</td>
                                <td className="font-medium">{job?.title}</td>
                                <td>{job?.deadLine}</td>
                                <td>
                                    <span className={`badge px-3 py-1 text-white font-semibold ${job?.status === 'ACTIVE'
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                        }`}>
                                        {job?.status}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to={`/applications/${job?._id}`}
                                        className="btn btn-sm btn-outline btn-accent"
                                    >
                                        View Applications
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;
