import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import '../pages/Course.css';
import { FaDollarSign } from 'react-icons/fa';
import { AuthContext } from '../utilities/UserContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const course = useLoaderData();
    const { title, cost } = course;
    const navigate = useNavigate();
    const { darkToggle } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        toast.success(`Congratulations! Welcome to ${title} course`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div style={{ minHeight: '1080px' }} className={`${darkToggle && 'dark'} course-bg py-16`}>
            <ToastContainer />
            <div className="flex justify-center">
                <div className="p-4">
                    <div className="card dark:bg-slate-700 dark:text-white w-100 bg-base-100 shadow-xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered dark:text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Your Phone Number</span>
                                </label>
                                <input type="text" placeholder="phone number" className="input input-bordered dark:text-black" required />
                            </div>

                            <div className="card-body items-center text-center mt-5">
                                <h2 className="card-title">Course Name: {title}</h2>
                                <p className=' text-xl'>Cost: <FaDollarSign className='inline'></FaDollarSign>{cost}</p>
                                <div className="card-actions mt-5">
                                    <button type='submit' className="btn btn-success mt-5 dark:text-white">Proceed to pay</button>
                                    <button onClick={() => { navigate(-1) }} className="btn btn-success mt-5 dark:text-white">Go Back</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Checkout;