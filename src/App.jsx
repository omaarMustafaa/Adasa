// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Page404 from "./components/Page404/Page404";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },
      { path: "blog/:slug", element: <ArticleDetails /> },
      { path: "*", element: <Page404 /> },
    ],
  },
],{
  basename:'/Adasa'
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
}

export default App;
