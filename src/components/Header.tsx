import { MagnifyingGlass } from "@phosphor-icons/react";

import TechStackPulseLogo from "../assets/techstack-pulse-logo.svg";
import { useAuth } from "../contexts/AuthContext";
import HeaderMenuSignedOut from "./HeaderMenuSignedOut";
import HeaderMenuSignedIn from "./HeaderMenuSignedIn";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex justify-between p-8 border-b sticky border-[#e7e7e7]">
      <div className="flex justify-between items-center gap-6">
        <img src={TechStackPulseLogo} alt="TechStack Pulse Logo" />
        <div className="flex justify-between items-center w-80">
          <div className="flex items-center gap-3 border py-2 px-3 rounded-3xl border-[#B0B0B0] w-[100%]">
            <MagnifyingGlass color="#B0B0B0" />
            <input className="outline-none" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      {user ? <HeaderMenuSignedIn /> : <HeaderMenuSignedOut />}
    </header>
  );
};

export default Header;
