import React from "react";
import "./styles/index.css";

export interface DirhamSymbolProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Custom font size for the symbol */
  symbolSize?: string | number;
  /** Gap between symbol and children */
  gap?: string | number;
}

export const DirhamSymbol = React.forwardRef<HTMLSpanElement, DirhamSymbolProps>(
  ({ children, symbolSize, gap = "0.25rem", className, style, ...props }, ref) => {
    const containerStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap,
      ...style,
    };

    const symbolStyle: React.CSSProperties = {
      fontFamily: '"UAESymbol", sans-serif',
      fontSize: symbolSize || "inherit",
      color: "inherit",
      textTransform: "initial",
    };

    return (
      <span ref={ref} className={`dirham-container ${className || ""}`} style={containerStyle} {...props}>
        <span className="dirham-symbol" style={symbolStyle}>
          &#xE000;
        </span>
        {children}
      </span>
    );
  }
);

DirhamSymbol.displayName = "DirhamSymbol";
