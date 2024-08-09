import { FC } from "react";

const Input: FC<{
  type?: string;
  title: string;
  placeholder?: string;
  value: string;
  error?: string[]; // Contains the string of error messages for the current field.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, title, placeholder = "", value, error, onChange }) => {
  let inputType = null;
  switch (type?.toUpperCase()) {
    case "GHOST":
      inputType = (
        <input
          className="border-b-[1px] border-gray-300 p-3 text-sm focus:outline-none"
          placeholder={placeholder}
          type="text"
          id={title}
          value={value}
          onChange={onChange}
        />
      );
      break;

    default:
      inputType = (
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
      );
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold" htmlFor={title}>
        {title}
      </label>

      {inputType}
      {error && <p className="text-sm text-[#ff2e3d]">{error.join(", ")}</p>}
    </div>
  );
};

export default Input;
