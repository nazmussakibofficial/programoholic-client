import React from 'react';
import { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { AuthContext } from '../utilities/UserContext';



const Home = () => {
    const { darkToggle } = useContext(AuthContext);

    const images = [
        { url: "https://online.illinois.edu/images/default-source/default-album/homepage-slider-1.jpg?sfvrsn=4a5e8611_2" },
        { url: "https://spanish.latinadvisor.com/assets/images/what-to-study/online-courses/banner-online-courses.png" },
        { url: "https://www.thinknexttraining.com/images/online-summer-training-banner.jpg" },
    ];

    return (
        <div className={`${darkToggle && 'dark'}`}>
            <div className='dark:bg-gray-700'>
                <div className="slide-container">
                    <Slide>
                        {images.map((image, index) => (
                            <div className="each-slide" key={index}>
                                <div style={{ 'backgroundImage': `url(${image.url})`, height: '500px', }}>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <div className='container mx-auto py-16 px-4 dark:bg-gray-700 dark:text-white'>
                    <h1 className="text-5xl font-bold text-dark bg-white dark:bg-gray-700 text-center mb-6 p-4 rounded-lg">Why Join Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="card w-100 bg-base-100 dark:bg-gray-700 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Expert Teachers</h2>
                                <p>We provide our students with Top grade teachers</p>

                            </div>
                        </div>
                        <div className="card w-100 bg-base-100 dark:bg-gray-700 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Trusted certifications</h2>
                                <p>We are certified by many well known organizations</p>

                            </div>
                        </div>
                        <div className="card w-100 bg-base-100 dark:bg-gray-700 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Quality Content</h2>
                                <p>Our quality of content ensures student's utmost progress</p>

                            </div>
                        </div>
                        <div className="card w-100 bg-base-100 dark:bg-gray-700 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Adapting all the time</h2>
                                <p>Always adapting with new technologies</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;