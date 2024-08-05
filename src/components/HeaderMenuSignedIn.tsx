import { useState, useRef } from "react";
import { UserCircle, NotePencil, Bell } from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

import { useClickOutside } from "../hooks/useClickOutside";

const HeaderMenuSignedIn = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="flex justify-between items-center gap-2">
      <button className="flex items-center gap-2 text-sm px-3 py-2">
        <NotePencil size={20} />
        Write
      </button>
      <button className="px-3 py-2">
        <Bell size={20} />
      </button>

      <div className="relative" ref={menuRef}>
        <div className="flex items-center">
          <button onClick={handleToggleMenu}>
            <UserCircle size={32} />
          </button>
        </div>
        <div
          className={`${
            !showMenu && "hidden"
          } absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-44 dark:bg-gray-700`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button className="w-[100%] text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-[100%] text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuSignedIn;
