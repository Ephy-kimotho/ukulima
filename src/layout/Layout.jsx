import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <div>
      <Header />
      <main className="min-h-screen text-white">
        <Toaster position="top-center" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
