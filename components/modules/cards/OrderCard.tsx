"use client";

import { VariantProps, cva } from "class-variance-authority";
import AmountCounter from "../../blocks/Counter/AmountCounter";
import { useEffect, useState } from "react";
import {
  OrderInterface,
  useOrderContext,
} from "@/components/pages/layouts/MainLayoutWrapper";
import IconButton from "@/components/elements/iconbutton/IconButton";
import { RiDeleteBinLine } from "react-icons/ri";
import { motion } from "framer-motion";

const OrderCardStyles = cva(`flex gap-3 w-full relative`, {
  variants: {
    intent: {
      primary: ``,
      filled: "",
    },

    size: {
      sm: "w-[10rem] h-[10rem]",
    },
  },
});

interface MenuItemCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof OrderCardStyles> {
  order: OrderInterface;
}

export default function OrderCard({
  order,
  className,
  intent,
}: MenuItemCardProps) {
  const [count, setCount] = useState(order.amount);
  const { Orders, setOrders } = useOrderContext();

  const styles = OrderCardStyles({
    className,
    intent,
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
      <div className="absolute top-2 right-2">
        <IconButton
          onClick={() => {
            setOrders((prev) => prev.filter((item) => item._id !== order._id));
          }}
          size={"sm"}
          intent={"semiGhost"}
        >
          <RiDeleteBinLine />
        </IconButton>
      </div>

      <div className="w-[6rem] h-[6rem] rounded-lg">
        <img
          src={order.image}
          alt={`Image of ${order.name}`}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col max-w-full">
        <div className="title text-xl truncate font-bold max-w-[8em] sm:max-w-[10em]">
          {order.name}
        </div>
        <div className="text-sm category text-zinc-400">{order.category}</div>

        <AmountCounter
          className="mt-2"
          State={count}
          setState={setCount}
          min={1}
        />
      </div>

      <div className="absolute bottom-2 right-2">
        <div className="text-sm font-bold price text-primary-600">
          {count} x {order.price}
        </div>
      </div>
    </div>
  );
}
