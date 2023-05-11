"use client";

import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import AmountCounter from "@/components/blocks/Counter/AmountCounter";
import FoodOption from "@/components/blocks/FoodOption/FoodOption";
import Button from "@/components/elements/button/Button";
import IconButton from "@/components/elements/iconbutton/IconButton";
import { useOrderContext } from "@/components/pages/layouts/MainLayoutWrapper";
import { getMenuItem } from "@/lib/GetData";

const OrderButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Button onClick={onClick} width={"full"} font={"bold"}>
    {children}
  </Button>
);

const ShoppingBagIcon = () => (
  <IconButton>
    <BiShoppingBag size={25} />
  </IconButton>
);

export default function Page({
  params,
}: {
  params: {
    restaurantId: string;
    menuId: string;
  };
}) {
  const { restaurantId, menuId } = params;
  const { Orders, setOrders } = useOrderContext();

  const [Count, setCount] = useState(
    Orders.find((order) => order._id === menuId)?.amount || 1
  );

  useEffect(() => {
    setOrders((prev) => {
      const index = prev.findIndex((item) => item._id === menuId);

      if (index === -1) return prev;

      prev[index].amount = Count;

      return [...prev];
    });
  }, [Count]);

  const menuItem = getMenuItem(restaurantId, menuId);

  const handleOrder = () => {
    const existingOrderIndex = Orders.findIndex(
      (order) => order._id === menuId
    );
    const updatedOrders = [...Orders];

    if (existingOrderIndex !== -1) {
      updatedOrders[existingOrderIndex].amount += Count;
    } else {
      updatedOrders.push({
        _id: menuId,
        restaurant_id: restaurantId,
        name: menuItem?.name || "",
        description: menuItem?.description || "",
        image: menuItem?.image || "",
        category: menuItem?.type || "",
        price: `${menuItem?.base_price}` || "",
        amount: Count,
      });
    }

    setOrders(updatedOrders);
  };

  return (
    <div className="">
      <div className="absolute left-0 z-50 flex flex-wrap w-full gap-5 p-3 px-6 pb-10 bg-white sm:static top-60 sm:px-0 rounded-t-2xl">
        <div className="flex flex-col w-full md:w-max">
          <Link
            className="mb-4 w-max"
            href={`/${restaurantId}/${menuItem?.category_id}`}
          >
            <Button
              size={"md"}
              className="hidden shadow-xl sm:flex"
              intent={"bordered"}
            >
              <FiChevronLeft size={25} />
              Go Back
            </Button>
          </Link>
          <div className="img sm:flex hidden h-[20em] w-full md:w-[24em]">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={menuItem?.image || ""}
            />
          </div>

          <div className="relative z-30 flex flex-col mt-6">
            <h1 className="text-xl font-bold capitalize sm:text-2xl">
              {menuItem?.name}
            </h1>
            <div className="mt-2 text-zinc-400 sm:text-lg">
              {menuItem?.description}
            </div>
          </div>
        </div>

        <div className="relative z-30 flex flex-col flex-1 sm:p-5">
          <div className="text-xl font-bold capitalize sm:text-2xl">
            customize your Classic Burger
          </div>

          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex flex-col">
              <div className="text-lg font-semibold text-zinc-500">class</div>
              <div className="flex gap-2 mt-2">
                <FoodOption
                  className="text-xs"
                  intent={"selected"}
                  img="https://picsum.photos/500/500"
                  title="Beef Patty"
                />{" "}
                <FoodOption
                  className="text-xs"
                  img="https://picsum.photos/500/500"
                  title="Beef Patty"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-semibold text-zinc-500">classic</div>
              <div className="flex gap-2 mt-2">
                <FoodOption
                  className="text-xs"
                  img="https://picsum.photos/500/500"
                  title="Beef Patty"
                />{" "}
                <FoodOption
                  className="text-xs"
                  img="https://picsum.photos/500/500"
                  title="Beef Patty"
                />
              </div>
            </div>
          </div>

          <div className="h-[0.07em] mt-5 w-full rounded-full bg-zinc-300" />

          <div className="flex flex-col gap-3 mt-6">
            <div className="text-xl font-bold">Amount</div>
            <AmountCounter State={Count} setState={setCount} min={1} />
            <div className="h-[0.07em] mt-5 w-full rounded-full bg-zinc-300" />

            <div className="mt-2 text-xl font-bold sm:text-2xl">
              Total Price : {(menuItem?.base_price || 0) * Count} IQD
            </div>

            <div className="flex gap-3 mt-3">
              <Link onClick={handleOrder} href="/checkout">
                <ShoppingBagIcon />
              </Link>

              <OrderButton onClick={handleOrder}>Add to Cart</OrderButton>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${menuItem?.image || ""})`,
        }}
        className="w-full sm:hidden h-[18em] absolute top-0 left-0 bg-fixed bg-cover bg-white"
      >
        <div className="fixed top-4 left-4">
          <Link href={`/${restaurantId}/${menuItem?.category_id}`}>
            <IconButton size={"md"} className="shadow-xl" intent={"white"}>
              <FiChevronLeft size={25} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
