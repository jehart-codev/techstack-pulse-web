import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { UserCircle, NotePencil, Bell } from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

import { useClickOutside } from "../hooks/useClickOutside";
import CreatePostModal from "./CreatePost";

type HeaderProps = {
  currentPage?: string;
};

const HeaderMenuSignedIn = ({ currentPage }: HeaderProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [openArticlePreview, setOpenArticlePreview] = useState(false);

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
      {currentPage === "/editor" ? (
        <button
          onClick={() => setOpenArticlePreview(true)}
          className="bg-[#ff2e3d] text-white p-2 opacity-25 hover:opacity-100 duration-300 w-[109px] rounded-[48px]"
        >
          Post article
        </button>
      ) : (
        <Link
          to="/editor"
          className="flex items-center gap-2 text-sm px-3 py-2"
        >
          <NotePencil size={20} />
          Write
        </Link>
      )}
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

      <CreatePostModal
        isVisible={openArticlePreview}
        toggleModal={() => setOpenArticlePreview(!openArticlePreview)}
      />
    </div>
  );
};

export default HeaderMenuSignedIn;
