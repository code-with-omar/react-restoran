import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Service from "../Shared/Service/Service";

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
            }
        ]
    },
]);
export default router;