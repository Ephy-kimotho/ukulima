import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "../components/about/AboutPage";
import Cart from "../components/cart/Cart";
import ContactPage from "../components/contact/ContactPage";
import HomePage from "../components/home/HomePage";
import Products from "../components/products/Products";

const routes = createBrowserRouter([
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
    ],
  },
]);

export default routes;
