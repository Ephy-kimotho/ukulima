import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "../components/about/AboutPage";
import Cart from "../components/cart/Cart";
import ContactPage from "../components/contact/ContactPage";
import HomePage from "../components/home/HomePage";
import Products from "../components/products/Products";
import ProductDetail from "../components/products/ProductDetail";
import ProfilePage from "../components/profile/ProfilePage";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import OrderPage from "../components/orders/OrderPage";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetail />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "orders",
          element: <OrderPage />,
        },
      ],
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default routes;
