import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideNav from '../shared/CourseSideNav';
import '../pages/Course.css';
import { FaDollarSign } from 'react-icons/fa';

const Checkout = () => {
    const course = useLoaderData();
    const { title, cost } = course;
    return (
        <div style={{ minHeight: '1080px' }} className='course-bg py-16 mt-16'>
            <div className="grid grid-cols-4 gap-4">
                <CourseSideNav></CourseSideNav>
                <div className="col-span-full md:col-span-3 p-4">
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center mt-5">
                            <h2 className="card-title">Course Name: {title}</h2>
                            <p className=' text-xl'>Cost: <FaDollarSign className='inline'></FaDollarSign>{cost}</p>
                            <div className="card-actions mt-5">
                                <button className="btn btn-success mt-5">Proceed to payment</button>
                                <button className="btn btn-success mt-5"><Link to='./'>Go Back</Link></button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;