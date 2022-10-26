import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css';

const Profile = () => {
    const { user, loading, updateProf } = useContext(AuthContext);
    const handleChange = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        if (name) {
            updateProf({ displayName: name })
                .then(() => { })
                .catch(() => { })
        }
        else if (photo) {
            updateProf({ photoURL: photo })
                .then(() => { })
                .catch(() => { })
        }
        else if (name && photo) {
            updateProf({ displayName: name, photoURL: photo })
                .then(() => { })
                .catch(() => { })
        }
        else {
            toast.warning('At least change one detail!', {
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

    }
    return (
        !loading && <div className='profile-bg'>
            <ToastContainer /><ToastContainer />
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <div className="relative">
                            <div className="w-48 h-48 glass mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">{user.displayName}</h1>
                        <p className="font-light text-gray-600 mt-3">{user.email}</p>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <h1 className='text-xl text-center mt-5'>Update your profile here</h1>
                                    <form onSubmit={handleChange} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Full Name</span>
                                            </label>
                                            <input name="name" type="text" placeholder="full name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Change</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;