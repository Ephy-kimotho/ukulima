import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AboutPage from "../components/about/AboutPage";
import Cart from "../components/cart/Cart";
import ContactPage from "../components/contact/ContactPage";
import HomePage from "../components/home/HomePage";
import Products from "../components/products/Products";
import ProductDetail from "../components/products/ProductDetail";
import ProfilePage from "../components/profile/ProfilePage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/components/dashboard/Dashboard";
import Orders from "../admin/components/orders/Orders";
import AdminProducts from "../admin/components/products/AdminProducts";
import Categories from "../admin/components/catgories/Categories";
import Reports from "../admin/components/reports/Reports";

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
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
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
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <AdminProducts />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
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
