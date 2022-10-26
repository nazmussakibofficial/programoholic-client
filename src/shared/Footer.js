import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utilities/UserContext';

const Footer = () => {
    const { darkToggle } = useContext(AuthContext);
    return (
        <div className={`${darkToggle && 'dark'} bg-success`}>
            <div className="max-w-2xl mx-auto text-white dark:text-black py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Download our app </h3>
                    <p> Learn. Code. Conquer. </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center  bg-white border border-white w-auto rounded-lg px-4 py-2 w-52 mx-2 dark:bg-gray-700 dark:border-gray-700">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt='' />
                            <div className="text-left text-black ml-3 dark:text-white">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white border border-white w-auto rounded-lg px-4 py-2 w-44 mx-2 dark:bg-gray-700 dark:border-gray-700">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt='' />
                            <div className="text-left text-black ml-3 dark:text-white">
                                <p className='text-xs'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0 text-white dark:text-black"> &copy; Programoholic, 2022. </p>
                    <div className="order-1 md:order-2 ">
                        <span className="px-2 text-white dark:text-black">About us</span>
                        <span className="px-2 text-white border-l dark:border-l-black dark:text-black">Contact us</span>
                        <span className="px-2 text-white border-l dark:border-l-black dark:text-black">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;