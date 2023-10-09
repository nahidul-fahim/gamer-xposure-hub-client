import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Components/Layout/Root";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import BuyTicket from "../Pages/BuyTicket/BuyTicket";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/:id",
          element: <PrivateRoute><EventDetails /></PrivateRoute>,
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/blog",
          element: <PrivateRoute><Blog /></PrivateRoute>
        },
        {
          path: "/ticket",
          element: <PrivateRoute><BuyTicket /></PrivateRoute>
        }
      ]
    },
  ]);

export default router;