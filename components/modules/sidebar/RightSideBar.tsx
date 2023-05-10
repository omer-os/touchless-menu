"use client";

import OrderCard from "../cards/OrderCard";
import ButtonLink from "@/components/elements/link/ButtonLink";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import IconButton from "@/components/elements/iconbutton/IconButton";
import { AiOutlineShopping } from "react-icons/ai";
import FMbreakPoint from "@/lib/hooks/FMbreakPoint";
import { IoClose } from "react-icons/io5";
import { useOrderContext } from "@/components/pages/layouts/MainLayoutWrapper";

export default function RightSideBar() {
  const route = useSelectedLayoutSegment();
  const { Orders, setOrders } = useOrderContext();
  const [OpenModal, setOpenModal] = useState(false);

  const isMobile = FMbreakPoint("(max-width: 1124px)");

  if (route !== "(checkout)")
    return (
      <>
        <motion.div
          className={`border-l lg:sticky right-0 fixed bg-white lg:w-auto w-full left-0 lg:h-auto overflow-y-scroll transition-all h-[80vh] bottom-0 rounded-t-xl z-50`}
          initial={{ bottom: "-100%" }}
          animate={{
            bottom: OpenModal && isMobile ? "0%" : "-100%",
          }}
          transition={{
            type: "just",
            duration: 0.2,
          }}
        >
          <div className="bg-white"></div>

          <div className="flex justify-between items-center sticky top-0 px-4 py-3 left-0 w-full z-20 bg-white">
            <div className="text-2xl capitalize font-bold">your orders</div>

            <IconButton
              intent={"white"}
              rounded={"full"}
              size={"sm"}
              onClick={() => setOpenModal(!OpenModal)}
              className="lg:hidden"
            >
              <IoClose size={26} />
            </IconButton>
          </div>

          <div className="flex p-4 flex-col gap-5">
            <div className="flex flex-col gap-4 mt-5">
              {Orders.map((order, index) => (
                <OrderCard
                  key={order._id + index + order.amount}
                  order={order}
                />
              ))}
            </div>

            <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

            <div className="flex text-xl gap-3 flex-col">
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Amount</div>
                <div className="font-bold">
                  {Orders.reduce((acc, curr) => acc + curr.amount, 0)} Items
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Order Price</div>
                <div className="font-bold">
                  {Orders.map(
                    (order: any) => order.price * order.amount
                  ).reduce((acc, curr) => acc + curr, 0) }{" "}
                  IQD
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Delivery</div>
                <div className="font-bold">5.000 IQD</div>
              </div>
            </div>

            <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

            <div className="flex justify-between font-bold text-xl">
              <div>Total Price</div>

              <div>
                {Orders.map((order: any) => order.price * order.amount).reduce(
                  (acc, curr) => acc + curr,
                  0
                )  +
                  5000}{" "}
                IQD
              </div>
            </div>

            <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

            <ButtonLink
              size={"lg"}
              width={"full"}
              href="/checkout"
              font={"bold"}
              className="justify-center"
            >
              Checkout
            </ButtonLink>
          </div>
        </motion.div>

        <AnimatePresence>
          {OpenModal && isMobile && (
            <motion.div
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              onClick={() => setOpenModal(false)}
              className="fixed z-40 bottom-0 left-0 w-full h-full lg:hidden bg-black/50"
            />
          )}
        </AnimatePresence>

        <IconButton
          intent={"primary"}
          rounded={"full"}
          className="fixed right-5 z-30 bottom-24 "
          size={"lg"}
          onClick={() => setOpenModal(!OpenModal)}
        >
          <AiOutlineShopping size={24} />
        </IconButton>
      </>
    );
  else return <></>;
}
