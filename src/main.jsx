import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./authentication/AuthProvider.jsx";
import Login from "./authentication/Login.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
      },
      {
        path: "addSpot",
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
