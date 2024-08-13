import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: React.ReactNode;
  size?: "default" | "icon";
  variant?: "default" | "outline" | "ghost";
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, size = "default", variant = "default", prefix = null, suffix = null, className, ...rest }) => {
  const baseClasses = "h-[36px] rounded-md text-[14px] font-sans font-semibold flex items-center justify-center transition-all duration-300 ease-in-out active:scale-95";
  const sizeClasses = size === "default" ? "px-4 py-auto" : "w-[36px] justify-center";
  
  let variantClasses;
  switch (variant) {
    case "outline":
      variantClasses = "bg-transparent border border-white/10 text-white/80 hover:bg-[#2E2E33] hover:bg-opacity-60";
      break;
    case "ghost":
      variantClasses = "bg-transparent text-white/80 hover:bg-[#2E2E33]";
      break;
    case "default":
    default:
      variantClasses = "bg-[#2E2E33] bg-opacity-75 hover:bg-opacity-100 text-white/80";
      break;
  }

  return (
    <button
      {...rest}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      {prefix && <span className="mr-2">{prefix}</span>}
      {children}
      {suffix && <span className="ml-2">{suffix}</span>}
    </button>
  );
};

export default Button;
