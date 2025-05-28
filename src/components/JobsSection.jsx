import React, { use } from 'react';
import { Link } from 'react-router';

const JobsSection = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);
    // console.log(jobs)

    return (
        <div className='max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                jobs.map(job => (
                    <div key={job._id} className="mx-auto card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={job.company_logo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {job.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Salary: {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency}</p>
                            <p>{job.description}</p>
                            <div className="card-actions">

                                {
                                    job.requirements.map((req, index) => (

                                        <div key={index} className="badge badge-outline">{req}</div>
                                    ))
                                }

                            </div>
                            <div className='navbar-end w-full my-3'>
                                <Link to={`/jobs/${job._id}`} className='btn btn-accent text-white'>Show Details</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default JobsSection;