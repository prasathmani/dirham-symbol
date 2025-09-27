import React from "react";
import "./styles/index.css";

export const DirhamSymbol = React.forwardRef<HTMLSpanElement, React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>>(
  ({ children, className, ...props }, ref) => {
    return (
      <span ref={ref} className={`dirham-container ${className || ""}`} {...props}>
        <span className="dirham-symbol">&#xE000;</span>
        {children}
      </span>
    );
  }
);
