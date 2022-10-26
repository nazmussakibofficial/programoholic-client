import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../utilities/UserContext';

const CourseSideNav = () => {
    const [categories, setCategories] = useState([]);
    const { darkToggle } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://programoholic-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className={`${darkToggle && 'dark'}`}>
            <ul className="menu bg-base-100 w-56 ml-6 mt-4 p-2 rounded-box dark:bg-gray-700 dark:text-white">
                <li className="text-black text-sm dark:text-white">
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