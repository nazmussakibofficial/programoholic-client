import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <span>Category</span>
                </li>
                {
                    categories.map(category => <li className="bordered" key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </li>)
                }
            </ul>
        </div>

    );
};

export default CourseSideNav;