import React from "react";

type ButtonProps = {
  type?: string | null;
  onClick: () => void;
  label: string;
};

const Button = ({ type, onClick, label }: ButtonProps) => {
  const base = "text-sm py-2 px-3 min-w-[109px] rounded-[48px]";
  const baseStyle = "bg-[#f2f2f2] text-neutral-500";
  const primary =
    "bg-[#ff2e3d] text-white opacity-25 hover:opacity-100 duration-300";
  const ghost = "text-[#ff2e3d] bg-transparent";

  let buttonStyle = null;
  switch (type && type.toUpperCase()) {
    case "PRIMARY":
      buttonStyle = primary;
      break;

    case "GHOST":
      buttonStyle = ghost;
      break;

    default:
      buttonStyle = baseStyle;
      break;
  }

  return (
    <button onClick={onClick} className={[base, buttonStyle].join(" ")}>
      {label}
    </button>
  );
};

export default Button;
