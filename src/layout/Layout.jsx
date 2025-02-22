import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-orange-500 text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
