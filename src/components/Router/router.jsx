import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Service from "../Shared/Service/Service";
import About from "../Shared/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Main></Main>
            },
            {
                path:"service",
                element:<Service></Service>
            },
            {
                path:"about",
                element:<About></About>
            }
        ]
    },
]);
export default router;