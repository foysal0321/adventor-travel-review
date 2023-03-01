import { createBrowserRouter } from "react-router-dom";
import Addservice from "../components/AddService/Addservice";
import Blog from "../components/blog/Blog";
import Home from "../components/home/Home";
import Review from "../components/Review/Review";
import AllServices from "../components/Services/AllServices";
import Details from "../components/Services/Details";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import Error from "../lyout/Error";
import Main from "../lyout/Main";
import PrivetRout from "./PrivetRout";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement : <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/addservice',
                element: <PrivetRout><Addservice /> </PrivetRout> 
            },
            {
                path: '/review',
                element: <PrivetRout> <Review /></PrivetRout> 
            },
            {
                path: '/services',
                element: <AllServices />
            },
            {
                path: '/services/:id',
                loader:({params})=> fetch(`https://service-review-server-foysal0321.vercel.app/services/${params.id}`),
                element: <Details />
            },
        ]
    }
])