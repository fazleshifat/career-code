import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        const newStatus = e.target.value;

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: newStatus })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Applicant Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-600 mb-8">
                {applications.length} Applications for Job ID: {job_id}
            </h1>

            <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow-md">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-200 text-base-content uppercase text-sm font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Applicant Name</th>
                            <th>Position</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={application._id} className="hover">
                                <td>{index + 1}</td>
                                <td className="font-medium">{application.applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        name="status"
                                        onChange={(e) => handleStatusChange(e, application._id)}
                                        defaultValue={application.status}
                                        className="select select-bordered select-sm w-full max-w-xs"
                                    >
                                        <option disabled>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
