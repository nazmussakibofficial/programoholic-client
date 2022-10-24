import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../shared/Main";

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
            }
        ]
    }
])