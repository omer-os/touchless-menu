import { VariantProps, cva } from "class-variance-authority";

const TextInputStyles = cva(`text-input w-full rounded transition-all`, {
  variants: {
    intent: {
      bordered: "border border-zinc-400",
      filled: "bg-light-300",
    },

    InputSize: {
      sm: ["text-sm", "py-1", "px-2"],
      md: "text-primary py-2 px-4",
      lg: ["text-lg", "py-3", "px-6"],
      xl: ["text-xl", "py-4", "px-8"],
    },
  },

  defaultVariants: {
    intent: "bordered",
    InputSize: "md",
  },
});

interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof TextInputStyles> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  width?: "max" | "full";

  State?: string;
  setState?: any;
}

export default function TextInput({
  className,
  placeholder,
  intent,
  InputSize,
  startIcon,
  endIcon,
  width = "max",
  State,
  setState,
  ...props
}: TextInputProps) {
  const styles = TextInputStyles({
    className,
    intent,
    InputSize,
  });
  return (
    <div className={`relative ${width === "max" ? "max-w-max" : "w-full"}`}>
      {startIcon && (
        <div className="absolute inset-y-0 left-1.5 flex items-center pl-2">
          {startIcon}
        </div>
      )}
      <input
        value={State}
        onChange={(e) => setState(e.target.value)}
        className={
          styles +
          ` 
      
      ${endIcon ? "pr-10" : ""}
      ${startIcon ? "pl-10" : ""}
      `
        }
        {...props}
        placeholder={placeholder}
      />

      {endIcon && (
        <div className="absolute inset-y-0 right-1.5 flex items-center pr-2">
          {endIcon}
        </div>
      )}
    </div>
  );
}
