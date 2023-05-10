"use client";

import { VariantProps, cva } from "class-variance-authority";
import AmountCounter from "../../blocks/Counter/AmountCounter";
import { useEffect, useState } from "react";
import {
  OrderInterface,
  useOrderContext,
} from "@/components/pages/layouts/MainLayoutWrapper";

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
  order: OrderInterface;
}

export default function OrderCard({ order, className }: MenuItemCardProps) {
  const [count, setCount] = useState(order.amount);
  const { Orders, setOrders } = useOrderContext();

  const styles = OrderCardStyles({
    className,
  });

  useEffect(() => {
    setOrders((prev) => {
      const index = prev.findIndex((item) => item._id === order._id);

      if (index === -1) return prev;

      prev[index].amount = count;

      return [...prev];
    });
  }, [count]);

  return (
    <div className={styles}>
      <div className="w-[8rem] h-[7rem] rounded-lg">
        <img
          src={order.image}
          alt={`Image of ${order.name}`}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="flex p-3 flex-col max-w-full">
        <div className="title text-xl truncate font-bold max-w-[10em]">
          {order.name}
        </div>
        <div className="category text-sm text-zinc-400">{order.category}</div>

        <AmountCounter
          className="mt-auto"
          State={count}
          setState={setCount}
          min={1}
        />
      </div>

      <div className="absolute bottom-2 right-2">
        <div className="price text-primary-600 text-sm font-bold">
          {count} x {order.price}
        </div>
      </div>
    </div>
  );
}
