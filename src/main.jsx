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
import AllSpots from "./allTouristSpots/AllUserAddedSpots.jsx";
import Details from "./allTouristSpots/Details.jsx";
import MyList from "./myList/MyList.jsx";
import Update from "./myList/Update.jsx";

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
        element: <AllSpots></AllSpots>,
        // loader: () => fetch("http://localhost:5000/spots"),
      },
      {
        path: "/details/:spotName",
        element: (
          <PrivateRouteProvider>
            <Details></Details>
          </PrivateRouteProvider>
        ),
      },

      {
        path: "myList",
        element: (
          <PrivateRouteProvider>
            <MyList></MyList>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "update",
        element: (
          <PrivateRouteProvider>
            <Update></Update>
          </PrivateRouteProvider>
        ),
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
