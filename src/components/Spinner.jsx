import React from 'react';

const Spinner = () => {
    return (
        <div className='min-w-full flex justify-center items-center mx-auto'>
            <span className="loading loading-spinner w-10 dark:text-white"></span>
        </div>
    );
};

export default Spinner;