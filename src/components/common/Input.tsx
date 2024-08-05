import { FC } from "react";

const Input: FC<{
  title: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ title, placeholder = "", value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold" htmlFor={title}>
        {title}
      </label>
      <input
        className="border border-gray-300 rounded-lg p-3"
        placeholder={placeholder}
        type="text"
        id={title}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
