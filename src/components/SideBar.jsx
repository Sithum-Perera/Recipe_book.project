import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default SideBar;

const DesktopSidebar = () => {
  return (
    <nav className="p-3 md:p-3 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        {/* Logo Section */}
        <div className="w-full">
          <img src="/logo.svg" alt="Desktop logo" className="hidden md:block" />
          <img
            src="/mobile-logo.svg"
            alt="Mobile logo"
            className="block md:hidden"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center md:items-start gap-8">
          <li>
            <Link to="/" className="flex gap-1 items-center">
              <Home size={24} />
              <span className="font-bold hidden md:block">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/favourites"} className="flex gap-1 items-center">
              <Heart size={24} />
              <span className="font-bold hidden md:block">Favourite</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex gap-10 justify-center border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
      {/* Mobile-specific sidebar implementation here */}
      <Link to="/" className="flex gap-1 items-center">
        <Home size={24} />
        <span className="font-bold hidden md:block">Home</span>
      </Link>
      <Link to={"/favourites"} className="flex gap-1 items-center">
        <Heart size={24} />
        <span className="font-bold hidden md:block">Favourite</span>
      </Link>
    </div>
  );
};
