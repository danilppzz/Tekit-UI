import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "default" | "search";
  suffix?: React.ReactNode; // Agregado para aceptar un sufijo
  ref?: any;
}

const Input: React.FC<InputProps> = ({
  variant = "default",
  className = "",
  suffix,
  ref,
  ...rest
}) => {
  if (variant === "search") {
    return (
      <div className="relative inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
          />
        </svg>
        <input
          ref={ref}
          {...rest}
          className={`bg-[#121216] h-[36px] pl-10 py-auto rounded-md text-[14px] font-sans font-semibold bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 ease-in-out border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        />
        {suffix && <div className="absolute bg-[#1E1E1E] rounded-md text-[12px] px-1 right-3 text-white/70 top-1/2 transform -translate-y-1/2 pointer-events-none">{suffix}</div>}
      </div>
    );
  } else {
    return (
      <div className="relative inline-block">
        <input
          ref={ref}
          {...rest}
          className={`bg-[#121216] h-[36px] px-4 rounded-md text-[14px] font-sans font-semibold flex items-center justify-center bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 ease-in-out border border-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        />
        {suffix && <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">{suffix}</div>}
      </div>
    );
  }
};

export default Input;


