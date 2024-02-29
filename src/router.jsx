import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./views/Index";
import DarClases from "./views/DarClases";
import Login from "./views/Login";
import AlumnoRegister from "./views/AlumnoRegister";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: '/dar-clases',
                element: <DarClases />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <AlumnoRegister />
            }
        ]

    }

]);


export default router;