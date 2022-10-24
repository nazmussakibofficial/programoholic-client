import React from 'react';
import SwiftSlider from 'react-swift-slider'



const Home = () => {
    const data = [
        { 'id': '1', 'src': 'https://online.illinois.edu/images/default-source/default-album/homepage-slider-1.jpg?sfvrsn=4a5e8611_2' },
        { 'id': '2', 'src': 'https://spanish.latinadvisor.com/assets/images/what-to-study/online-courses/banner-online-courses.png' },
        { 'id': '3', 'src': 'https://www.thinknexttraining.com/images/online-summer-training-banner.jpg' },
    ];


    return (
        <div >
            <SwiftSlider data={data} />
            <div className='container mx-auto my-16 px-4'>
                <h1 className="text-5xl font-bold text-dark bg-white text-center mb-6 p-4 rounded-lg">Why Join Us</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Expert Teachers</h2>
                            <p>We provide our students with Top grade teachers</p>

                        </div>
                    </div>
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Trusted certifications</h2>
                            <p>We are certified by many well known organizations</p>

                        </div>
                    </div>
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Quality Content</h2>
                            <p>Our quality of content ensures student's utmost progress</p>

                        </div>
                    </div>
                    <div className="card w-100 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Adapting all the time</h2>
                            <p>Always adapting with new technologies</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;