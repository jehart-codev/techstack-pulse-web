import { FC, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebaseConfig";
import TechStackPulseSmallLogo from "../assets/tsp-logo-small.svg";
import { signInSchema } from "../schemas";
import Modal from "./common/Modal";
import Input from "./common/Input";
import PasswordInput from "./common/PasswordInput";
import { Alert } from "@mui/material";

interface IFormErrors {
  email?: string[];
  password?: string[];
}

const SignInModal: FC<{
  isVisible: boolean;
  toggleModal: () => void;
  onSignInSuccess: () => void;
  openSignUpModal: () => void;
}> = ({ isVisible, toggleModal, onSignInSuccess, openSignUpModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IFormErrors | null>(null);

  const [responseError, setResponseError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validationResult = signInSchema.safeParse({
      email,
      password,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.flatten().fieldErrors as IFormErrors);
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onSignInSuccess();
    } catch (error: any) {
      console.error("Error signing in:", error.code);
      setResponseError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setErrors(null);
    setLoading(false);
    toggleModal();
  };

  const displayResponseErrorMessage = () => {
    if (responseError === "auth/too-many-requests") {
      return "Too many requests. Try again later.";
    }

    if (responseError === "auth/invalid-credential") {
      return "Invalid credentials. Please try again.";
    }

    return "Uncaught error. Please try again.";
  };

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      <div className="px-10">
        <div className="flex justify-center flex-col items-center gap-4 mb-10">
          <img src={TechStackPulseSmallLogo} alt="TechStack Pulse Logo" />
          <h2 className="text-3xl font-bold font-outfit">Sign In</h2>
        </div>

        {responseError && (
          <div className="mb-5">
            <Alert variant="filled" severity="error">
              {displayResponseErrorMessage()}
            </Alert>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              title="Email address"
              placeholder="email@email.com"
              value={email}
              error={errors?.email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              title="Password"
              value={password}
              error={errors?.password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center mb-10">
              <p className="text-sm">Forgot Password?</p>
              <button
                type="button"
                className="text-[#ff2e3d] hover:underline"
                onClick={openSignUpModal}
              >
                Create an account
              </button>
            </div>
            <div>
              <button
                type="submit"
                className={`${
                  isLoading ? "opacity-50" : ""
                } text-[#fff] bg-[#ff2e3d] rounded-[48px] py-3 outline-none w-[100%] text-lg hover:bg-[#c7000e]`}
                disabled={isLoading}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignInModal;
