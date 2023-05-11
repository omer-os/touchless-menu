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
  `rounded-lg transition-all flex flex-col items-center shadow-lg hover:shadow-xl sm:hover:scale-105 justify-center snap-start text-center`,
  {
    variants: {
      size: {
        sm: "min-w-[7rem] h-28",
        md: "md:min-w-[8rem] min-w-[7rem] md:h-32 h-28",
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
      <div className="w-10 h-10 img">
        <img
          src={img}
          alt={`Image of ${name}`}
          className="object-contain object-center w-full h-full rounded-lg"
        />
      </div>

      <div className="font-bold name">{name}</div>
      <div className="text-xs numberOfItems text-zinc-400">
        {numberOfItems} items
      </div>
    </Link>
  );
}
