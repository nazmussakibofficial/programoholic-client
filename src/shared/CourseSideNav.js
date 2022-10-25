import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CourseSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://programoholic-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <ul className="menu bg-base-100 w-56 ml-6 p-2 rounded-box">
                <li className="menu-title">
                    <span className='mb-2'>Category</span>
                </li>
                {
                    categories.map(category => <li key={category.id}>
                        <NavLink className={({ isActive }) => isActive ? "bg-success" : undefined} to={`/courses/${category.id}`}>{category.name}</NavLink>
                    </li>)
                }
            </ul>
        </div>

    );
};

export default CourseSideNav;