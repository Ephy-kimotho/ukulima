import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminLayout() {
  const [hideLinkName, setHideLinkName] = useState(false);

  const toggleLinkNameVisibility = () => setHideLinkName(!hideLinkName);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        hideLinkName={hideLinkName}
        toggleLinkNameVisibility={toggleLinkNameVisibility}
        className={hideLinkName ? "w-32" : "w-60"}
      />

      <div className="flex flex-col flex-grow transition-all duration-300">
        <Header />
        <div className="p-4 md:p-8 bg-[#f0eeee] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
