import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import '../pages/Course.css';
import { FaDollarSign } from 'react-icons/fa';
import { AuthContext } from '../utilities/UserContext';
import { useContext } from 'react';

const Checkout = () => {
    const course = useLoaderData();
    const { title, cost } = course;
    const navigate = useNavigate();
    const { darkToggle } = useContext(AuthContext);
    return (
        <div style={{ minHeight: '1080px' }} className={`${darkToggle && 'dark'} course-bg py-16`}>
            <div className="flex justify-center">
                <div className="p-4 dark:bg-gray-700 dark:text-white">
                    <div className="card dark:bg-gray-700 w-100 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center mt-5">
                            <h2 className="card-title">Course Name: {title}</h2>
                            <p className=' text-xl'>Cost: <FaDollarSign className='inline'></FaDollarSign>{cost}</p>
                            <div className="card-actions mt-5">
                                <button className="btn btn-success mt-5 dark:text-white">Proceed to payment</button>
                                <button onClick={() => { navigate(-1) }} className="btn btn-success mt-5 dark:text-white">Go Back</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;