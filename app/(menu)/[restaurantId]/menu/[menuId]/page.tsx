"use client";
import AmountCounter from "@/components/blocks/Counter/AmountCounter";
import FoodOption from "@/components/blocks/FoodOption/FoodOption";
import Button from "@/components/elements/button/Button";
import IconButton from "@/components/elements/iconbutton/IconButton";
import { useOrderContext } from "@/components/pages/layouts/MainLayoutWrapper";
import { getMenuItem } from "@/lib/GetData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FiChevronLeft } from "react-icons/fi";

export default function page({
  params,
}: {
  params: {
    restaurantId: string;
    menuId: string;
  };
}) {
  const [Count, setCount] = useState(
    useOrderContext().Orders.find((order) => order._id === params.menuId)
      ?.amount || 1
  );
  const { Orders, setOrders } = useOrderContext();

  useEffect(() => {
    setOrders((prev) => {
      const index = prev.findIndex((item) => item._id === params.menuId);

      if (index === -1) return prev;

      prev[index].amount = Count;

      return [...prev];
    });
  }, [Count]);

  const menuItem = getMenuItem(params.restaurantId, params.menuId);

  return (
    <div className="">
      <div className="flex sm:static absolute top-60 left-0 w-full sm:px-0 px-6 z-50 rounded-t-2xl bg-white p-3 flex-wrap gap-5 pb-10">
        <div className="flex w-full md:w-max flex-col">
          <Link
            className="mb-4 w-max"
            href={`/${params.restaurantId}/${menuItem?.category_id}`}
          >
            <Button
              size={"md"}
              className="sm:flex hidden shadow-xl"
              intent={"bordered"}
            >
              <FiChevronLeft size={25} />
              Go Back
            </Button>
          </Link>
          <div className="img sm:flex hidden h-[20em] w-full md:w-[24em]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={menuItem?.image || ""}
            />
          </div>

          <div className="flex relative z-30 flex-col mt-6">
            <h1 className="sm:text-2xl text-xl font-bold capitalize">
              {menuItem?.name}
            </h1>
            <div className="text-zinc-400 mt-2 sm:text-lg">
              {menuItem?.description}
            </div>
          </div>
        </div>

        <div className="flex flex-1 relative z-30 flex-col sm:p-5">
          <div className="sm:text-2xl text-xl font-bold capitalize">
            customize your Classic Burger
          </div>

          <div className="flex mt-4 justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="text-lg  font-semibold text-zinc-500">class</div>
              <div className="flex mt-2 gap-2">
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
              <div className="text-lg  font-semibold text-zinc-500">
                classic
              </div>
              <div className="flex mt-2 gap-2">
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

          <div className="flex mt-6 flex-col gap-3">
            <div className="text-xl font-bold">Amount</div>
            <AmountCounter State={Count} setState={setCount} min={1} />
            <div className="h-[0.07em] mt-5 w-full rounded-full bg-zinc-300" />

            <div className="sm:text-2xl text-xl mt-2 font-bold">
              Total Price : {(menuItem?.base_price || 0) * Count} IQD
            </div>

            <div className="flex mt-3 gap-3">
              <IconButton>
                <BiShoppingBag size={25} />
              </IconButton>

              <Button
                onClick={() => {
                  const existingOrderIndex = Orders.findIndex(
                    (order) => order._id === params.menuId
                  );

                  if (existingOrderIndex !== -1) {
                    const updatedOrders = [...Orders];
                    updatedOrders[existingOrderIndex].amount += Count;
                    setOrders(updatedOrders);
                  } else {
                    setOrders([
                      ...Orders,
                      {
                        _id: params.menuId,
                        restaurant_id: params.restaurantId,
                        name: menuItem?.name || "",
                        description: menuItem?.description || "",
                        image: menuItem?.image || "",
                        category: menuItem?.type || "",
                        price: `${menuItem?.base_price}` || "",
                        amount: Count,
                      },
                    ]);
                  }
                }}
                width={"full"}
                font={"bold"}
              >
                Add to Cart
              </Button>
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
          <Link href={`/${params.restaurantId}/${menuItem?.category_id}`}>
            <IconButton size={"md"} className="shadow-xl" intent={"white"}>
              <FiChevronLeft size={25} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
