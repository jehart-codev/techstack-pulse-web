import { useState } from "react";
import { NotePencil } from "@phosphor-icons/react";

import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

const HeaderMenuSignedOut = () => {
  const [visibleModal, setVisibleModal] = useState<
    null | "sign-up" | "sign-in"
  >(null);

  const handleToggleSignUpVisible = () => {
    setVisibleModal((visibleModal) =>
      visibleModal === "sign-up" ? null : "sign-up"
    );
  };

  const handleToggleSignInVisible = () => {
    setVisibleModal((visibleModal) =>
      visibleModal === "sign-in" ? null : "sign-in"
    );
  };

  return (
    <div className="flex justify-between items-center gap-2">
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
      />
      <SignInModal
        isVisible={visibleModal === "sign-in"}
        toggleModal={handleToggleSignInVisible}
      />
    </div>
  );
};

export default HeaderMenuSignedOut;
