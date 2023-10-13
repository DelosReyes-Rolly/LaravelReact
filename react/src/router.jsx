import {Navigate, createBrowserRouter} from "react-router-dom";
import Landing from "./views/Landing";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Users from "./views/Users.jsx";
import UserForm from "./views/UserForm.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate" />
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
        ],
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path:'/home',
                element: <Landing />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;