import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideNav from '../shared/CourseSideNav';
import '../pages/Course.css';
import { FaDollarSign, FaStar, FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseSummary = () => {

    const course = useLoaderData();
    const { title, details, image_url, rating, cost, _id } = course;
    return (
        <div style={{ minHeight: '1080px' }} className='course-bg py-16 mt-4'>
            <div className="grid grid-cols-4 gap-4">
                <CourseSideNav></CourseSideNav>
                <div className="col-span-full md:col-span-3 p-4">
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-actions mt-5 justify-center">
                            <h1 className='text-4xl font-bold'>Course Detials</h1>
                        </div>
                        <div className="card-actions mt-5 justify-end">
                            <Pdf targetRef={ref} filename="course-summary.pdf" scale={0.6}>
                                {({ toPdf }) => <button className="btn btn-success mt-5 mr-16" onClick={toPdf}> Generate<FaFilePdf className='inline ml-2'></FaFilePdf></button>}
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
                            <button className="btn btn-success mt-5"><Link to={`/checkout/${_id}`}>Get premium access</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CourseSummary;