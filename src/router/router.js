import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
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
            }
        ]
    }
])