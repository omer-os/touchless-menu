import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva("button", {
  variants: {
    intent: {
      primary: ["bg-primary-600", "text-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-primary", "py-2", "px-4"],
    },

    scaling: {
      scale: "hover:scale-105 transition-all",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => (
  <button className={buttonStyles({ intent, size, className })} {...props}>
    {props.children}
  </button>
);

export default Button;
