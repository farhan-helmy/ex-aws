import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./page/Home";
import { Otp } from "./page/Otp";
import { Success } from "./page/Success";
import { Failed } from "./page/Failed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/failed",
        element: <Failed />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
