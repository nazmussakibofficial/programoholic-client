import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../shared/CourseCard';
import CourseSideNav from '../shared/CourseSideNav';
import './Course.css';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div style={{ minHeight: '1080px' }} className='course-bg py-16 mt-4'>
            <div className="grid grid-cols-4 gap-4">
                <CourseSideNav></CourseSideNav>
                <div className="col-span-full md:col-span-3 p-4">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            courses.map(course => <CourseCard
                                key={course._id}
                                course={course}
                            ></CourseCard>)
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Courses;