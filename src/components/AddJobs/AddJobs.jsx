import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJobs = () => {
    const { user } = use(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const { max, min, currency, ...newData } = data;
        newData.salaryRange = { min, max, currency };

        newData.requirements = newData.requirements.split(',').map(req => req.trim());
        newData.responsibilities = newData.responsibilities.split(',').map(res => res.trim());
        newData.status = "ACTIVE";

        axios.post('http://localhost:3000/jobs', newData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "New Job has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(console.error);
    };

    return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <h1 className='text-3xl font-bold text-center text-indigo-600 dark:text-white mb-10'>Post a New Job</h1>

            <form onSubmit={handleAddJob}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {/* Basic Info */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300">
                        <legend className="text-lg font-semibold mb-2">Basic Info</legend>

                        <label className="label">Job Title</label>
                        <input type="text" name="title" className="input input-bordered w-full" required />

                        <label className="label">Company Title</label>
                        <input type="text" name="companyTitle" className="input input-bordered w-full" required />

                        <label className="label">Company Logo URL</label>
                        <input type="text" name="company_logo" className="input input-bordered w-full" required />

                        <label className="label">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" required />
                    </fieldset>

                    {/* Job Type & Category */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300">
                        <legend className="text-lg font-semibold mb-2">Job Type & Category</legend>

                        <label className="label">Job Type</label>
                        <div className="flex flex-wrap gap-2">
                            <label className="badge"><input type="radio" name="jobType" value="On-Site" /> On-Site</label>
                            <label className="badge"><input type="radio" name="jobType" value="Remote" /> Remote</label>
                            <label className="badge"><input type="radio" name="jobType" value="Hybrid" /> Hybrid</label>
                        </div>

                        <label className="label mt-4">Job Category</label>
                        <select name="category" className="select select-bordered w-full" required>
                            <option disabled value="">Select Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>

                        <label className="label mt-4">Application Deadline</label>
                        <input type="date" name="deadLine" className="input input-bordered w-full" required />
                    </fieldset>

                    {/* Salary Range */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300">
                        <legend className="text-lg font-semibold mb-2">Salary Range</legend>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>

                            <div>
                                <label className="label">Min Salary</label>
                                <input type="text" name="min" className="input input-bordered w-full" required />
                            </div>

                            <div>
                                <label className="label">Max Salary</label>
                                <input type="text" name="max" className="input input-bordered w-full" required />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select name="currency" className="select select-bordered w-full" required>
                                    <option disabled value="">Select</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>AED</option>
                                    <option>EURO</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    {/* Description */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300 col-span-full lg:col-span-1">
                        <legend className="text-lg font-semibold mb-2">Description</legend>
                        <textarea name="description" className="textarea textarea-bordered w-full h-32" required placeholder="Write job description..."></textarea>
                    </fieldset>

                    {/* Requirements */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300 col-span-full lg:col-span-1">
                        <legend className="text-lg font-semibold mb-2">Requirements</legend>
                        <textarea name="requirements" className="textarea textarea-bordered w-full h-28" required placeholder="Separate by commas..."></textarea>
                    </fieldset>

                    {/* Responsibilities */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300 col-span-full lg:col-span-1">
                        <legend className="text-lg font-semibold mb-2">Responsibilities</legend>
                        <textarea name="responsibilities" className="textarea textarea-bordered w-full h-28" required placeholder="Separate by commas..."></textarea>
                    </fieldset>

                    {/* HR Info */}
                    <fieldset className="p-4 rounded-xl shadow-sm bg-base-200 dark:bg-gray-800 border border-base-300">
                        <legend className="text-lg font-semibold mb-2">HR Info</legend>

                        <label className="label">HR Name</label>
                        <input type="text" name="hr_name" className="input input-bordered w-full" required />

                        <label className="label">HR Email</label>
                        <input type="email" name="hr_email" defaultValue={user.email} className="input input-bordered w-full" required />
                    </fieldset>
                </div>

                <button type="submit" className='btn btn-accent text-white w-full mt-10'>Add Job</button>
            </form>
        </div>
    );
};

export default AddJobs;
