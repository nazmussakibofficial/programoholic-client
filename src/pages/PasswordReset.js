import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';
import './form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const PasswordReset = () => {
    const [error, setError] = useState('');
    const { resetPassword, darkToggle } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        resetPassword(email)
            .then(() => {
                toast.success('Password reset link sent!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className={`${darkToggle && 'dark'} flex justify-center py-20 form-body`}>
            <ToastContainer />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-slate-700 dark:text-white">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="input input-bordered dark:text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl text-red-500">{error}</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success dark:text-white">Reset Your Password</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default PasswordReset;