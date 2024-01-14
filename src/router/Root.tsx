import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: 'about',
            },
        ]
    }
]);


export default routers