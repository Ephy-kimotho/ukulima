import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminLayout() {
  const [hideLinkName, setHideLinkName] = useState(false);

  const toggleLinkNameVisibility = () => setHideLinkName(!hideLinkName);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar
        hideLinkName={hideLinkName}
        toggleLinkNameVisibility={toggleLinkNameVisibility}
        className={hideLinkName ? "w-32" : "w-56"}
      />

      <div className="flex flex-col flex-grow transition-all duration-300 relative">
        <Header />
        <div className="bg-[#f0eeee] h-full">
          <Toaster position="top-center" />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
