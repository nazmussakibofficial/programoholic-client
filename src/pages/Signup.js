import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utilities/UserContext';
import './form.css';

const Signup = () => {
    const { createUser, updateProf, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(e => console.error(e))
    }
    const handleGithubSignin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(e => console.error(e))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateProf(name, photo)
                form.reset();
            })
            .catch(e => console.error(e))

    }

    const handleUpdateProf = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateProf(profile)
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className="hero min-h-screen bg-base-200 form-body">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-dark bg-white text-center mb-6 p-4 rounded-lg">Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='name' type="text" placeholder="fullname" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-success">Sign up</button>
                        </div>
                    </form>
                    <div className="label text-sm mx-auto">
                        <Link to="/login" className="link link-hover">Or log in, if you already have an account</Link>
                    </div>
                    <h1 className='text-lg text-center'>--------Or--------</h1>
                    <div className="form-control">
                        <button onClick={handleGoogleSignin} className="btn btn-ghost mx-2"><FaGoogle className='mr-2'></FaGoogle> Login with Google</button>
                    </div>
                    <div className="form-control mb-4">
                        <button onClick={handleGithubSignin} className="btn btn-ghost mx-2"><FaGithub className='mr-2'></FaGithub> Login with Github</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Signup;