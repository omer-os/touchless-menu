import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const styles = cva(
  `absolute -top-1 -right-1 rounded-full flex items-center justify-center`,
  {
    variants: {
      intent: {
        primary: "bg-primary-600 text-white",
        secondary: "bg-secondary-600 text-white",
        success: "bg-green-500 text-white",
        ghost: "bg-transparent text-black hover:bg-black/20 active:bg-black/30",
        bordered:
          "border border-primary-600 text-primary-600 hover:bg-primary-600/10 active:bg-primary-600/20",
      },

      size: {
        sm: "w-4 h-4 text-xs",
        md: "w-6 h-6 text-sm",
        lg: "w-8 h-8 text-base",
      },
    },

    defaultVariants: {
      size: "md",
      intent: "primary",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles> {
  number: number;
}

export default function Badge({ number, size, className, intent }: BadgeProps) {
  const style = styles({ size, className, intent });

  return <div className={style}>{number}</div>;
}
