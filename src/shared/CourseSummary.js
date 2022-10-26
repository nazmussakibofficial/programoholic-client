import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideNav from '../shared/CourseSideNav';
import '../pages/Course.css';
import { FaDollarSign, FaStar, FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';

const ref = React.createRef();

const CourseSummary = () => {
    const { darkToggle } = useContext(AuthContext);
    const course = useLoaderData();
    const { title, details, image_url, rating, cost, _id } = course;
    return (
        <div style={{ minHeight: '1080px' }} className={`course-bg py-16 ${darkToggle && 'dark'}`}>
            <div className="grid grid-cols-7 gap-4 w-full">
                <CourseSideNav></CourseSideNav>
                <div className="col-span-full md:col-span-5 p-4 dark:bg-gray-700 dark:text-white">
                    <div className="card w-100 bg-base-100 dark:bg-gray-700 shadow-xl">
                        <div className="card-actions mt-5 justify-center">
                            <h1 className='text-4xl font-bold'>Course Detials</h1>
                        </div>
                        <div className="card-actions mt-5 justify-end">
                            <Pdf targetRef={ref} filename="course-summary.pdf" scale={0.6}>
                                {({ toPdf }) => <button className="btn btn-success mt-5 mr-16 dark:text-white" onClick={toPdf}> Generate<FaFilePdf className='inline ml-2'></FaFilePdf></button>}
                            </Pdf>
                        </div>
                        <div ref={ref}>
                            <figure className="px-10 pt-10">
                                <img src={image_url} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center mt-5">
                                <h2 className="card-title">{title}</h2>
                                <p>{details}</p>
                                <div className="card-actions mt-5">
                                    <div className="badge badge-outline text-xl p-4"><FaDollarSign className='mr-2'></FaDollarSign>{cost}</div>
                                    <div className="badge badge-outline text-xl p-4"><FaStar className='mr-2'></FaStar>{rating.number}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <button className="btn btn-success mt-5 dark:text-white"><Link to={`/checkout/${_id}`}>Get premium access</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CourseSummary;