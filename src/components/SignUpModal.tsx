import { FC, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebaseConfig";
import TechStackPulseSmallLogo from "../assets/tsp-logo-small.svg";
import { signUpSchema } from "../schemas";
import Modal from "./common/Modal";
import Input from "./common/Input";
import PasswordInput from "./common/PasswordInput";
import { Alert } from "@mui/material";

interface IFormErrors {
  email?: string[];
  firstname: string[];
  lastname: string[];
  password: string[];
  passwordConfirm: string[];
}

const SignUpModal: FC<{
  isVisible: boolean;
  toggleModal: () => void;
  openSignInModal: () => void;
  onSignUpSuccess: () => void;
}> = ({ isVisible, toggleModal, openSignInModal, onSignUpSuccess }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IFormErrors | null>(null);

  const [responseError, setResponseError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validationResult = signUpSchema.safeParse({
      email,
      firstname,
      lastname,
      password,
      passwordConfirm,
    });

    if (!validationResult.success) {
      /**
       * Format will be:
       *
       * {
       *   email:    [ 'Invalid Email' ],
       *   password: [ 'Password error 1', 'Password error 2' ]
       * }
       */
      setErrors(validationResult.error.flatten().fieldErrors as IFormErrors);
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      onSignUpSuccess();

      // Update the user's profile with the full name
      await updateProfile(user, {
        displayName: `${firstname} ${lastname}`,
      });
    } catch (error: any) {
      console.error("Error creating user:", error);
      setResponseError(error?.code || null);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setPasswordConfirm("");
    setErrors(null);
    setLoading(false);
    toggleModal();
  };

  const displayResponseErrorMessage = () => {
    if (responseError === "auth/email-already-in-use") {
      return "Email is already in use. Please try again.";
    }

    return "Uncaught error. Please try again.";
  };

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      <div className="px-10">
        <div className="flex justify-center flex-col items-center gap-4 mb-10">
          <img src={TechStackPulseSmallLogo} alt="TechStack Pulse Logo" />
          <h2 className="text-3xl font-bold font-outfit">Create an account</h2>
          <p className="text-[#ff2e3d]">
            Already have an account?{" "}
            <button
              type="button"
              className="underline"
              onClick={openSignInModal}
            >
              Sign in
            </button>
          </p>
        </div>
        {responseError && (
          <div className="mb-5">
            <Alert variant="filled" severity="error">
              {displayResponseErrorMessage()}
            </Alert>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-10">
            <Input
              title="Email address"
              placeholder="email@email.com"
              value={email}
              error={errors?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              title="First name"
              placeholder="John"
              value={firstname}
              error={errors?.firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              title="Last name"
              placeholder="Doe"
              value={lastname}
              error={errors?.lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <PasswordInput
              title="Password"
              value={password}
              error={errors?.password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              title="Re-enter password"
              value={passwordConfirm}
              error={errors?.passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className={`${
                isLoading ? "opacity-50" : ""
              } text-[#fff] bg-[#ff2e3d] rounded-[48px] py-3 outline-none w-[100%] text-lg hover:bg-[#c7000e]`}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignUpModal;
