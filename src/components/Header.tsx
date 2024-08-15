import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

import TechStackPulseLogo from "../assets/techstack-pulse-logo.svg";
import { useAuth } from "../contexts/AuthContext";
import HeaderMenuSignedOut from "./HeaderMenuSignedOut";
import HeaderMenuSignedIn from "./HeaderMenuSignedIn";

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();

  const renderSearchBar = () => (
    <div className="flex items-center gap-3 border py-2 px-3 rounded-3xl border-[#B0B0B0] w-[100%]">
      <MagnifyingGlass color="#B0B0B0" />
      <input className="outline-none" type="text" placeholder="Search" />
    </div>
  );

  console.log(user, "[user]");

  return (
    <header className="flex justify-between p-8 border-b sticky border-[#e7e7e7]">
      <div className="flex justify-between items-center gap-6">
        <Link to="/">
          <img src={TechStackPulseLogo} alt="TechStack Pulse Logo" />
        </Link>
        {location.pathname === "/editor" ? (
          <div className="flex items-center">
            <p className="text-sm leading-5 text-[#3d3d3d]">
              Draft in {user && user.displayName}
            </p>
          </div>
        ) : (
          <div className="flex justify-between items-center w-80">
            {renderSearchBar()}
          </div>
        )}
      </div>
      {user ? (
        <HeaderMenuSignedIn currentPage={location.pathname} />
      ) : (
        <HeaderMenuSignedOut />
      )}
    </header>
  );
};

export default Header;
