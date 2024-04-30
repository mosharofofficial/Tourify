import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./authentication/AuthProvider.jsx";
import Login from "./authentication/Login.jsx";
import Register from "./authentication/Register.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./homePage/Home.jsx";
import AddSpot from "./addTouristSpot/AddSpot.jsx";
import PrivateRouteProvider from "./PrivateRoute/PrivateRouteProvider.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "addSpot",
        element: (
          <PrivateRouteProvider>
            <AddSpot></AddSpot>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/allSpots",
      },
      {
        path: "/details/:id",
      },
      {
        path: "myList",
      },
      {
        path: "update",
      },
    ],
  },
  {
    path: "/errorPage",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
