import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import JobsSection from '../components/JobsSection';

const Home = () => {

    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json()).then()


    return (
        <div className='dark:bg-gray-700'>

            <Banner></Banner>
            <Suspense fallback={<span className="loading text-black dark:text-white mx-auto text-center py-10 flex justify-center loading-spinner loading-xl"></span>}>
                <JobsSection jobsPromise={jobsPromise}></JobsSection>
            </Suspense>
        </div>

    );
};

export default Home; 