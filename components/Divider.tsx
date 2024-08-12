import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  type?: "vertical" | "horizontal";
}

const Divider: React.FC<DividerProps> = ({ className, type = "horizontal" }) => {
  const verticalClass = `bg-white/10 h-full w-[1px]`;
  const horizontalClass = "bg-white/10 w-full h-[1px]";

  return (
    <div className={`${type == "horizontal" ? horizontalClass : verticalClass} ${className}`}></div>
  );
};

export default Divider;
