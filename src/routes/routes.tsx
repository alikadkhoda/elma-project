import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import DetailPaper from "../pages/DetailPaper";
import Condition from "../pages/Condition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'detail-paper',
          element: <DetailPaper />
        },
        {
          path: 'projects/:id',
          element: <DetailPaper />
        },
        {
          path: 'condition',
          element: <Condition />
        },
        {
          path: 'privacy-policy',
          element: <PrivacyPolicy />
        }
      ]
    }
  ],
  {
    basename: '/elma-project'
  }
);

export default routes;