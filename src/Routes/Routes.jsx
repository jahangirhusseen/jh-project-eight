import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading ......</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
