"use client";
import HorizontalSelectableMenu from "@/components/elements/Select/HorizontalSelectableMenu";
import Button from "@/components/elements/button/Button";
import OrderCard from "@/components/modules/cards/OrderCard";
import { useOrderContext } from "@/components/pages/layouts/MainLayoutWrapper";
import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function page() {
  const { Orders, setOrders } = useOrderContext();
  const [PaymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div>
      <Button
        onClick={() => window.history.back()}
        intent={"ghost"}
        className="px-0 text-zinc-600 hover:px-4"
      >
        <FiChevronLeft size={22} />
        Go Back
      </Button>
      <h1 className="mt-3 text-2xl font-bold capitalize">
        complete your order
      </h1>

      {/* Order List */}
      <div className="flex flex-wrap w-full gap-4 mt-5">
        {Orders.map((order) => (
          <div
            key={order._id + order.amount}
            className="flex-grow p-2 bg-zinc-100"
          >
            <OrderCard intent={"filled"} order={order} />
          </div>
        ))}
      </div>

      {/* Order Information */}
      <div className="flex flex-col gap-4 my-5">
        <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

        <div className="flex flex-col gap-3 text-xl">
          <div className="flex items-center justify-between">
            <div className="text-zinc-400">Amount</div>
            <div className="font-bold">
              {Orders.reduce((acc, curr) => acc + curr.amount, 0)} Items
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-zinc-400">Order Price</div>
            <div className="font-bold">
              {Orders.map((order: any) => order.price * order.amount).reduce(
                (acc, curr) => acc + curr,
                0
              )}{" "}
              IQD
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-zinc-400">Delivery</div>
            <div className="font-bold">5.000 IQD</div>
          </div>
        </div>

        <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

        <div className="flex justify-between text-xl font-bold">
          <div>Total Price</div>

          <div>
            {Orders.map((order: any) => order.price * order.amount).reduce(
              (acc, curr) => acc + curr,
              0
            ) + 5000}{" "}
            IQD
          </div>
        </div>
        <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />
      </div>

      {/* Payment Information */}
      <div className="flex flex-col mt-5">
        <div className="text-xl font-bold">Payment Method</div>
      </div>

      <div className="relative z-10 mt-5">
        <HorizontalSelectableMenu
          State={PaymentMethod}
          setState={setPaymentMethod}
          options={[
            {
              label: "Cash",
              value: "cash",
            },
            {
              label: "Credit Card",
              value: "credit",
            },
          ]}
        />
      </div>
    </div>
  );
}
