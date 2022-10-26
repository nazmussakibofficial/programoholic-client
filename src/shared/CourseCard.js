import React from 'react';
import { FaStar, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, thumbnail_url, details, cost, rating, _id } = course
    return (
        <div className="card w-full bg-base-100 image-full">
            <figure><img src={thumbnail_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-around items-center">
                    <div className="badge badge-outline"><FaDollarSign className='mr-2'></FaDollarSign>{cost}</div>
                    <div className="badge badge-outline"><FaStar className='mr-2'></FaStar>{rating.number}</div>
                    <button className="btn btn-success"><Link to={`/course/${_id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;