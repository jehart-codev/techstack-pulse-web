import { FC, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebaseConfig";
import TechStackPulseSmallLogo from "../assets/tsp-logo-small.svg";
import { signUpSchema } from "../schemas";
import Modal from "./common/Modal";
import Input from "./common/Input";
import PasswordInput from "./common/PasswordInput";

interface IFormErrors {
  email?: string[];
  fullname: string[];
  password: string[];
  passwordConfirm: string[];
}

const SignUpModal: FC<{
  isVisible: boolean;
  toggleModal: () => void;
  openSignInModal: () => void;
}> = ({ isVisible, toggleModal, openSignInModal }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IFormErrors | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validationResult = signUpSchema.safeParse({
      email,
      fullname,
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

      // Update the user's profile with the full name
      await updateProfile(user, {
        displayName: fullname,
      });

      alert("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creating user");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setFullname("");
    setPassword("");
    setPasswordConfirm("");
    setErrors(null);
    toggleModal();
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
              title="Fullname"
              placeholder="John Doe"
              value={fullname}
              error={errors?.fullname}
              onChange={(e) => setFullname(e.target.value)}
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
