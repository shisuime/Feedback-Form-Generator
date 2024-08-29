import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPanelpage from "./pages/AdminPanelPage";
import HomePage from "./pages/HomePage";
import FormsPanel from "./components/FormsPanel/FormsPanel.js";
import FormGeneration from "./components/FormGeneration/FormGeneration.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AdminPanelpage />,
    children: [
      {
        path: "/",
        element: <FormsPanel />,
      },
      {
        path: "/formGeneration",
        element: <FormGeneration />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
