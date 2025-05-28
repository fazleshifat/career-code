import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useParams } from 'react-router';
import axios from 'axios';

const ApplicationForm = () => {

    const { id: jobId } = useParams();
    // console.log(id)

    const { user } = use(AuthContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.linkedin.value;
        console.log(linkedin, github, resume)

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        // sending information do DB
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='mx-auto flex justify-center min-h-screen items-center'>
            <form onSubmit={handleFormSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Application Form</legend>

                <label className="label">LinkedIn Link</label>
                <input type="text" name='linkedin' className="input" placeholder="add your Linkedin profile link" />

                <label className="label">Github Link</label>
                <input type="text" name='github' className="input" placeholder="add your Github profile link" />

                <label className="label">Resume Link</label>
                <input type="text" name='resume' className="input" placeholder="add your Resume link" />

                <button className='btn btn-accent text-white w-full'>Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;