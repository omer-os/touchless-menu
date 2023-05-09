import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

interface Props
  extends React.HTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof styles> {
  img: string;
  name: string;
  numberOfItems?: number;

  className?: string;
  href: string;
}

const styles = cva(`rounded-lg transition-all flex flex-col items-center justify-center `, {
  variants: {
    size: {
      sm: "w-28 h-28",
      md: "w-32 h-32",
      lg: "w-36 h-36",
      xl: "w-40 h-40",
    },

    intent: {
      regular: "bg-white text-inherit",
      selected: "bg-primary-600/20 ring-2 ring-primary-600 text-primary-600",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export default function MenuCategoryCard(props: Props) {
  const {
    className,
    img,
    name,
    numberOfItems,
    size = "md",
    href = "/",
    intent,
  } = props;
  const classes = styles({ className, size, intent });
  return (
    <Link href={href} className={`${classes}`}>
      <div className="img">
        <img src={img} alt={`Image of ${name}`} className="rounded-lg" />
      </div>

      <div className="name font-bold">{name}</div>
      <div className="numberOfItems text-xs text-zinc-400">
        {numberOfItems} items
      </div>
    </Link>
  );
}
