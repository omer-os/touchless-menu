import { cva, type VariantProps } from "class-variance-authority";

export const IconButtonStyles = cva(
  `
  button 
  rounded 
  active:scale-95 
  transition-all
  active:brightness-90 
  hover:brightness-110
  fill-current
`,
  {
    variants: {
      intent: {
        white: "bg-white text-zinc-400",

        primary: "bg-primary-600 text-white",
        secondary: "bg-secondary-600 text-white",
        success: "bg-success-600 text-white",
        ghost: "bg-transparent text-black hover:bg-black/20 active:bg-black/30",
        bordered:
          "border border-primary-600 text-primary-600 hover:bg-primary-600/10 active:bg-primary-600/20",

        semiGhost: "bg-primary-200/40 text-primary-600 ring-primary-600 ring-2",
      },
      size: {
        sm: "p-2",
        md: "text-primary p-3",
        lg: "p-5",
        xl: "p-6",
      },
      font: {
        bold: "font-bold",
        normal: "font-normal",
      },
      width: {
        full: "w-full",
        auto: "w-auto",
      },

      IconColor: {
        auto: "text-auto",
        white: "text-white",
        black: "!text-black",
        zinc: "text-zinc-400",
      },

      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "bordered",
      size: "md",
      width: "auto",
      font: "normal",
      IconColor: "auto",
      rounded: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof IconButtonStyles> {
  children: React.ReactNode;

  onClick?: () => void;
}

const IconButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  width,
  font,
  IconColor,
  rounded,
  ...props
}) => (
  <button
    className={IconButtonStyles({
      intent,
      size,
      className,
      width,
      font,
      IconColor,
      rounded,
    })}
    onClick={props.onClick}
    {...props}
  >
    {props.children}
  </button>
);

export default IconButton;
