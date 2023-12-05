import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Profile from "./Component/Profile";
// import Spinach from "./Component/Spinach";
// import Popeye from "./Component/Popeye";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//     children: [
//       { path: "spinach", element: <Spinach /> },
//       { path: "popeye", element: <Popeye /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );