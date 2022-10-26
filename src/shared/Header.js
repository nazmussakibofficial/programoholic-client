import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utilities/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { darkToggle, setDarkToggle } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className={`${darkToggle && 'dark'}`}>
            <div className="navbar bg-base-100 dark:bg-gray-700 dark:text-white" >
                <div className="flex-1">
                    <img className='w-6' src="https://img.icons8.com/color/344/p-cute.png" alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Programoholic</Link>
                </div>
                <input type="checkbox" className="toggle" onClick={() => setDarkToggle(!darkToggle)} />
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col md:flex-row menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        {
                            user?.uid ?
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt='' title={user.displayName} />
                                        </div>
                                    </label>
                                    <ul tabIndex={1} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-gray-700 dark:text-white">
                                        <li><Link to='/profile'>Profile</Link></li>
                                        <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                                :
                                <>
                                    <li><Link to='/signup'>Sign Up</Link></li>
                                    <li><Link to='/login'>Log In</Link></li>
                                </>

                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;