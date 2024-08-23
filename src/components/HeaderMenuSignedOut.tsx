import { FC, useState } from "react";
import { NotePencil, List } from "@phosphor-icons/react";

import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { Menu, MenuItem } from "@mui/material";

const HeaderMenuSignedOut: FC<{
  onSignInSuccess: () => void;
  onSignUpSuccess: () => void;
}> = ({ onSignInSuccess, onSignUpSuccess }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const [visibleModal, setVisibleModal] = useState<
    null | "sign-up" | "sign-in"
  >(null);

  const handleToggleSignUpVisible = () => {
    handleCloseMenu();
    setVisibleModal((visibleModal) =>
      visibleModal === "sign-up" ? null : "sign-up"
    );
  };

  const handleToggleSignInVisible = () => {
    handleCloseMenu();
    setVisibleModal((visibleModal) =>
      visibleModal === "sign-in" ? null : "sign-in"
    );
  };

  const handleSignInSuccess = () => {
    setVisibleModal(null);
    onSignInSuccess();
  };

  const handleSignUpSuccess = () => {
    setVisibleModal(null);
    onSignUpSuccess();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex md:hidden justify-center items-center">
        <button onClick={handleClickMenu}>
          <List size="28" />
        </button>

        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className="text-sm" onClick={handleCloseMenu}>
            <NotePencil />
            Write
          </MenuItem>
          <MenuItem className="text-sm" onClick={handleToggleSignInVisible}>
            Sign in
          </MenuItem>
          <MenuItem className="text-sm" onClick={handleToggleSignUpVisible}>
            Sign up
          </MenuItem>
        </Menu>
      </div>
      <div className="justify-between items-center gap-2 md:flex hidden">
        <a className="flex items-center gap-2 text-sm px-3 py-2" href="#">
          <NotePencil />
          Write
        </a>
        <button
          className="border border-[#E57F7F] text-[#ff2e3d] text-sm px-3 py-2 rounded-lg outline-none hover:bg-[#c7000e] hover:text-[#fff]"
          onClick={handleToggleSignInVisible}
        >
          Sign in
        </button>
        <button
          className="text-[#fff] bg-[#ff2e3d] text-sm px-3 py-2 rounded-lg outline-none hover:bg-[#c7000e]"
          onClick={handleToggleSignUpVisible}
        >
          Sign up
        </button>

        <SignUpModal
          isVisible={visibleModal === "sign-up"}
          toggleModal={handleToggleSignUpVisible}
          openSignInModal={handleToggleSignInVisible}
          onSignUpSuccess={handleSignUpSuccess}
        />
        <SignInModal
          isVisible={visibleModal === "sign-in"}
          toggleModal={handleToggleSignInVisible}
          onSignInSuccess={handleSignInSuccess}
          openSignUpModal={handleToggleSignUpVisible}
        />
      </div>
    </div>
  );
};

export default HeaderMenuSignedOut;
