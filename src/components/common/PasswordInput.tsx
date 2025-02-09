import { FC, useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const PasswordInput: FC<{
  title: string;
  placeholder?: string;
  value: string;
  error?: string[]; // Contains the string of error messages for the current field.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ title, placeholder = "••••••••••••••", value, error, onChange }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm font-bold" htmlFor={title}>
        {title}
      </label>

      <div className="relative">
        <input
          className={`border border-gray-300 rounded-lg p-3 w-full pr-10 ${
            error ? "bg-red-50" : ""
          }`}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : "password"}
          id={title}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <Eye size={20} /> : <EyeSlash size={20} />}
        </button>
      </div>

      {error && <p className="text-sm text-[#ff2e3d]">{error.join(", ")}</p>}
    </div>
  );
};

export default PasswordInput;
