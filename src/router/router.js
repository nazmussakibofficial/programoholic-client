import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Checkout from "../shared/Checkout";
import CourseSummary from "../shared/CourseSummary";
import Main from "../shared/Main";
import Private from "./Private";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/profile',
                element: <Private><Profile></Profile></Private>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://programoholic-server.vercel.app/course')
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://programoholic-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <CourseSummary></CourseSummary>,
                loader: ({ params }) => fetch(`https://programoholic-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Private><Checkout></Checkout></Private>,
                loader: ({ params }) => fetch(`https://programoholic-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login/password-reset',
                element: <PasswordReset></PasswordReset>,
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])