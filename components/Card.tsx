import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  animated = false,
  rounded = "md",
  className = "",
  ...rest
}) => {
  const baseClasses = `w-[200px] h-[120px] bg-[#1E1F22] border border-white/10 rounded-${rounded}`;
  const animatedClasses = "hover:border-white/30 transition-all duration-150 ease-in-out";

  return (
    <article
      {...rest}
      className={`${baseClasses} ${className} ${animated ? animatedClasses : ""}`}
    >
      {children}
    </article>
  );
};

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  const baseClasses = "w-full h-[1px] bg-white/10 rounded-full";

  return <span className={`${baseClasses} ${className}`}></span>;
};

export { Card, Divider };
