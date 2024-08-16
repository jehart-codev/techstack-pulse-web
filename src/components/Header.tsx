import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

import TechStackPulseLogo from "../assets/techstack-pulse-logo.svg";
import { useAuth } from "../contexts/AuthContext";
import HeaderMenuSignedOut from "./HeaderMenuSignedOut";
import HeaderMenuSignedIn from "./HeaderMenuSignedIn";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Modal from "./common/Modal";
import SuccessLogo from "../assets/success-logo.svg";

const Header = () => {
  const [displaySignUpSuccess, setDisplaySignUpSuccess] = useState(false);
  const [displaySuccessSnackbar, setDisplaySuccessSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const location = useLocation();
  const { user } = useAuth();

  const renderSearchBar = () => (
    <div className="flex items-center gap-3 border py-2 px-3 rounded-3xl border-[#B0B0B0] w-[100%]">
      <MagnifyingGlass color="#B0B0B0" />
      <input className="outline-none" type="text" placeholder="Search" />
    </div>
  );

  const handleSignInCallback = () => {
    setSnackbarMessage("You are now signed in!");
    setDisplaySuccessSnackbar(true);
  };

  const handleSignOutCallback = () => {
    setSnackbarMessage("You are now signed out!");
    setDisplaySuccessSnackbar(true);
  };

  const handleSignUpCallback = () => {
    setDisplaySignUpSuccess(true);
  };

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
        <HeaderMenuSignedIn
          currentPage={location.pathname}
          onSignOutSuccess={handleSignOutCallback}
        />
      ) : (
        <HeaderMenuSignedOut
          onSignInSuccess={handleSignInCallback}
          onSignUpSuccess={handleSignUpCallback}
        />
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={displaySuccessSnackbar}
        autoHideDuration={3000}
        onClose={() => setDisplaySuccessSnackbar(false)}
      >
        <Alert
          onClose={() => setDisplaySuccessSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Modal
        isVisible={displaySignUpSuccess}
        onClose={() => setDisplaySignUpSuccess(false)}
        withCloseButton={false}
      >
        <div className="px-10 flex flex-col items-center justify-center gap-10">
          <img src={SuccessLogo} alt="Success Logo" />
          <div className="text-center">
            <h2 className="text-3xl font-bold font-outfit mb-2">
              Account Created
            </h2>
            <p className="text-sm px-2">
              Congrats - you’re all done. You can now see articles and create
              your own that can inspire or share with others.
            </p>
          </div>
          <button
            className="text-[#fff] bg-[#ff2e3d] rounded-[48px] py-3 outline-none w-[100%] text-lg hover:bg-[#c7000e]"
            onClick={() => setDisplaySignUpSuccess(false)}
          >
            Continue
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
