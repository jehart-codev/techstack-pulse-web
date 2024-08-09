import { FC } from "react";

const Input: FC<{
  title: string;
  placeholder?: string;
  value: string;
  error?: string[]; // Contains the string of error messages for the current field.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ title, placeholder = "", value, error, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold" htmlFor={title}>
        {title}
      </label>

      <input
        className={`border border-gray-300 rounded-lg p-3 ${
          error ? "bg-red-50" : ""
        }`}
        placeholder={placeholder}
        type="text"
        id={title}
        value={value}
        onChange={onChange}
      />

      {error && <p className="text-sm text-[#ff2e3d]">{error.join(", ")}</p>}
    </div>
  );
};

export default Input;
