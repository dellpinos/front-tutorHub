import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./components/Index";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            }
        ]

    }

]);


export default router;