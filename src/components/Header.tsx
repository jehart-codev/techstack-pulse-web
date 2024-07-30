import TechStackPulseLogo from "../assets/techstack-pulse-logo.svg";
import { MagnifyingGlass, NotePencil } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className="flex justify-between p-8 border-b border-[#e7e7e7]">
      <div className="flex justify-between items-center gap-6">
        <img src={TechStackPulseLogo} alt="TechStack Pulse Logo" />
        <div className="flex justify-between items-center w-80">
          <div className="flex items-center gap-3 border py-2 px-3 rounded-3xl border-[#B0B0B0] w-[100%]">
            <MagnifyingGlass color="#B0B0B0" />
            <input className="outline-none" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <a className="flex items-center gap-2 text-sm px-3 py-2" href="#">
          <NotePencil />
          Write
        </a>
        <button className="border border-[#E57F7F] text-[#ff2e3d] text-sm px-3 py-2 rounded-lg outline-none">
          Sign in
        </button>
        <button className="text-[#fff] bg-[#ff2e3d] text-sm px-3 py-2 rounded-lg outline-none">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
