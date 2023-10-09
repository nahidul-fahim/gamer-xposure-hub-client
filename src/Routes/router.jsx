import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Components/Layout/Root";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import EventDetails from "../Pages/EventDetails/EventDetails";

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
          element: <EventDetails />,
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
  ]);

export default router;