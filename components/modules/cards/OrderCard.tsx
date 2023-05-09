"use client";

import { VariantProps, cva } from "class-variance-authority";
import AmountCounter from "../../blocks/Counter/AmountCounter";
import { useState } from "react";

const OrderCardStyles = cva(`flex gap-3 w-full relative`, {
  variants: {
    intent: {
      primary: ``,
    },
  },

  defaultVariants: {
    intent: "primary",
  },
});

interface MenuItemCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof OrderCardStyles> {
  img: string;
  title: string;
  price: string;
  amount: string;
  category: string;
}

export default function OrderCard({
  title,
  category,
  price,
  img,
  amount,
  className,
}: MenuItemCardProps) {
  const [count, setCount] = useState(0);

  const styles = OrderCardStyles({
    className,
  });

  return (
    <div className={styles}>
      <div className="min-w-[8rem] h-28 rounded-lg">
        <img
          src={img}
          alt={`Image of ${title}`}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="flex p-3 flex-col max-w-full">
        <div className="title text-xl truncate font-bold max-w-[10em]">
          {title}
        </div>
        <div className="category text-sm text-zinc-400">{category}</div>

        <AmountCounter className="mt-auto" State={count} setState={setCount} />
      </div>

      <div className="absolute bottom-2 right-2">
        <div className="price text-primary-600 text-sm font-bold">{price}</div>
      </div>
    </div>
  );
}
