import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import DetailPaper from "../pages/DetailPaper";
import Condition from "../pages/Condition";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/detail-paper',
                element: <DetailPaper />
            },
            {
                path: '/condition',
                element: <Condition />
            }
        ]
    }
])

export default routes