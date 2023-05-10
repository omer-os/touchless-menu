import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  `
  
  rounded 
  active:scale-95 
  transition-all
  active:brightness-90 
  hover:brightness-110
  flex items-center gap-2
  justify-center

`,
  {
    variants: {
      intent: {
        primary: "bg-primary-600 text-white",
        secondary: "bg-secondary-600 text-white",
        success: "bg-success-600 text-white",
        ghost: "bg-transparent text-black hover:bg-black/20 active:bg-black/30",
        bordered:
          "border border-primary-600 text-primary-600 hover:bg-primary-600/10 active:bg-primary-600/20",
      },
      size: {
        sm: ["text-sm", "py-1", "px-2"],
        md: "text-primary py-2 px-4",
        lg: ["text-lg", "py-3", "px-6"],
        xl: ["text-xl", "py-4", "px-8"],
      },
      font: {
        bold: "font-bold",
        normal: "font-normal",
      },
      width: {
        full: "w-full",
        max: "w-max",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      width: "max",
      font: "normal",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  width,
  font,
  startIcon,
  endIcon,
  ...props
}) => {
  const generatedClasses = buttonStyles({
    intent,
    size,
    className,
    width,
    font,
  });
  return (
    <button className={generatedClasses} {...props}>
      {startIcon}
      {props.children}
      {endIcon}
    </button>
  );
};

export default Button;
