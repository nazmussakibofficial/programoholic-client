import React from 'react';
import './form.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn, darkToggle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(e => console.error(e))
    }
    const handleGithubSignin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
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
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className={`${darkToggle && 'dark'} hero min-h-screen bg-base-200 form-body`}>
            <div className="hero-content flex-col dark:text-white">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-dark bg-white text-center mb-6 p-4 rounded-lg dark:bg-slate-700">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 dark:bg-slate-700">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered dark:text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered dark:text-black" required />
                            <div className="label">
                                <Link to='password-reset' className="label-text-alt link link-hover dark:text-white dark:hover:text-white">Forgot password?</Link>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl text-red-500">{error}</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn btn-success dark:text-white">Login</button>
                        </div>
                    </form>
                    <div className="label text-sm">
                        <Link to="/signup" className="link link-hover dark:hover:text-white">Or register here, if you don't have an account</Link>
                    </div>
                    <h1 className='text-lg text-center'>--------Or--------</h1>
                    <div className="form-control">
                        <button onClick={handleGoogleSignin} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle> Login with Google</button>
                    </div>
                    <div className="form-control mb-4">
                        <button onClick={handleGithubSignin} className="btn btn-ghost"><FaGithub className='mr-2'></FaGithub> Login with Github</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;