import React from "react";
import { bleepPlay, type BleepsNames } from "../bleeps";

interface ButtonProps {
  name: BleepsNames;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: React.HTMLProps<HTMLElement>["className"];
  buttonType?: "submit" | "reset" | "button" | undefined;
  id?: React.HTMLProps<HTMLElement>["id"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  name,
  children,
  style,
  className,
  buttonType,
  onClick,
  id,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps): React.JSX.Element => {
  const bleepOnClick = (): void => bleepPlay(name);
  return (
    <button
      id={id}
      onClick={(event) => {
        const promiss = new Promise((resolve) => {
          if (onClick) {
            onClick(event);
          }
          resolve("Finished executing onClick handler!");
        });
        promiss.finally(bleepOnClick);
      }}
      style={style}
      type={buttonType}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
