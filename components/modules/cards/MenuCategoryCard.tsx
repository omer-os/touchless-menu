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

const styles = cva(
  `rounded-lg transition-all flex flex-col items-center justify-center  text-center`,
  {
    variants: {
      size: {
        sm: "min-w-[7rem] h-28",
        md: "min-w-[8rem] h-32",
        lg: "min-w-[9rem] h-36",
        xl: "min-w-[10rem] h-40",
      },

      intent: {
        regular: "bg-white text-inherit hover:bg-light-200",
        selected: "bg-primary-600/20 ring-2 ring-primary-600 text-primary-600",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);

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
      <div className="img w-10 h-10">
        <img
          src={img}
          alt={`Image of ${name}`}
          className="rounded-lg w-full object-center object-contain h-full"
        />
      </div>

      <div className="name font-bold">{name}</div>
      <div className="numberOfItems text-xs text-zinc-400">
        {numberOfItems} items
      </div>
    </Link>
  );
}
