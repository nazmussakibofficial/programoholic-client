import React from 'react';
import './form.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(e => console.error(e))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200 form-body">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-dark bg-white text-center mb-6 p-4 rounded-lg">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <div className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-success">Login</button>
                        </div>
                    </form>
                    <div className="label text-sm">
                        <Link to="/signup" className="link link-hover">Or register here, if you don't have an account</Link>
                    </div>
                    <h1 className='text-lg text-center'>--------Or--------</h1>
                    <div className="form-control">
                        <button onClick={handleGoogleSignin} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle> Login with Google</button>
                    </div>
                    <div className="form-control mb-4">
                        <button className="btn btn-ghost"><FaGithub className='mr-2'></FaGithub> Login with Github</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;