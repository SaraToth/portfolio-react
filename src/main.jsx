import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/globals.css";
import App from './App.jsx'
// import Home from "./pages/Home.jsx"
// import Project from "./pages/Project.jsx"
import "./i18n";

// Lazy Imports
const Home = React.lazy(() => import("./pages/Home.jsx"));
const Project = React.lazy(() => import("./pages/Project.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: "projects/:projectId", element: <Project/>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
