// Import thư viện
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import các trang
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Feature from "./pages/Feature";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";

// Import Layout component
import Layout from "./components/Layout";
import MinLayout from "./components/MinLayout";

// Import CSS chung
import "./assets/scss/bootstrap.scss";
import "./assets/css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <MinLayout>
        <Login />
      </MinLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MinLayout>
        <Register />
      </MinLayout>
    ),
  },
  {
    path: "/service",
    element: (
      <Layout>
        <Service />
      </Layout>
    ),
  },
  {
    path: "/project",
    element: (
      <Layout>
        <Project />
      </Layout>
    ),
  },
  {
    path: "/feature",
    element: (
      <Layout>
        <Feature />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/account",
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
  },
  {
    path: "/news",
    element: (
      <Layout>
        <News />
      </Layout>
    ),
  },
  {
    path: "/new/:id",
    element: (
      <Layout>
        <NewsDetail />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <MinLayout>
        <NotFound />
      </MinLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
