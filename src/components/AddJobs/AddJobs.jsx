import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const AddJobs = () => {

    const { user } = use(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // processing salary range
        const { max, min, currency, ...newData } = data;

        // const salaryInfo = { max, min, currency }

        newData.salaryInfo = { min, max, currency }

        // process requirements
        const requirementsWithString = newData.requirements.split(',');
        const requirementWithClean = requirementsWithString.map(req => req.trim())
        newData.requirements = requirementWithClean

        // process responsibilities
        newData.responsibilities = newData.responsibilities.split(',').map(res => res.trim());
        console.log(newData)
    }

    return (
        <div className='mx-auto w-fit text-center'>
            <h1 className='text-xl font-bold dark:text-white'>Please Add a job</h1>

            <form onSubmit={handleAddJob}>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {/* basic info about job*/}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border-2 p-2">
                        <legend className="fieldset-legend">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" name="jobTitle" className="input" placeholder="Job Title" />

                        <label className="label">Company Title</label>
                        <input type="text" name="companyTitle" className="input" placeholder="company title" />

                        <label className="label">Location</label>
                        <input type="text" name="location" className="input" placeholder="location" />
                    </fieldset>

                    {/* Job type*/}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-2">
                        <legend className="fieldset-legend">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                            <input className="btn" type="radio" name="jobType" defaultValue="On-Site" aria-label="On-Site" />
                            <input className="btn" type="radio" name="jobType" defaultValue="Remote" aria-label="Remote" />
                            <input className="btn" type="radio" name="jobType" defaultValue="Hybrid" aria-label="Hybrid" />
                        </div>


                        {/* job category */}
                        <legend className="fieldset-legend">Job Category</legend>

                        <label className="label">Select Job Category</label>
                        <select defaultValue="Job Category" name="category" className="select">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>

                        {/* application deadline */}
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input type="date" className="input" />
                    </fieldset>

                    {/* Salary Range*/}
                    <fieldset className="fieldset bg-base-200 border-base-300 h-fit rounded-box w-full border p-2">
                        <legend className="fieldset-legend">Salary Range</legend>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>

                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" name="min" className="input" placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" name="max" className="input" placeholder="Max Salary" />
                            </div>

                            <div>
                                <label className="label">Select Currency</label>
                                <select defaultValue="Job Category" name="currency" className="select">
                                    <option disabled={true}>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>AED</option>
                                    <option>EURO</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/* Job description */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-2">
                        <legend className="fieldset-legend">Job Description</legend>

                        <textarea placeholder="description" name="description" className="textarea textarea-primary"></textarea>
                    </fieldset>

                    {/* Job Requirements */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-2">
                        <legend className="fieldset-legend">Job Requirements</legend>

                        <textarea placeholder="requirements (separate by comma)" name="requirements" className="textarea textarea-primary"></textarea>
                    </fieldset>

                    {/* Job Responsibilities */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-2">
                        <legend className="fieldset-legend">Job Responsibilities</legend>

                        <textarea placeholder="responsibilities (separate by comma)" name="responsibilities" className="textarea textarea-primary"></textarea>
                    </fieldset>

                    {/* HR related Info*/}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-2">
                        <legend className="fieldset-legend">HR Related Info</legend>

                        <label className="label">HR Name</label>
                        <input type="text" name="hrName" className="input" placeholder="HR name" />

                        <label className="label">HR Email</label>
                        <input type="email" name="hrEmail" defaultValue={user.email} className="input" placeholder="HR email" />
                    </fieldset>

                </div>
                <input type="submit" className='btn w-full my-4 bg-accent text-white' value="Add Job" />
            </form>
        </div>
    );
};

export default AddJobs;