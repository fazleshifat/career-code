import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={job.company_logo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className='text-2xl'>{job.category}</h1>
                <h2 className="card-title">{job.company}</h2>
                <p>{job.description}</p>
                <div className="card-actions">
                    <Link to={`/jobApply/${job._id}`} className="btn btn-warning text-white">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;