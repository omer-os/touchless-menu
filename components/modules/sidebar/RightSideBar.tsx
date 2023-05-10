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

export default function RightSideBar() {
  const route = useSelectedLayoutSegment();
  const [OpenModal, setOpenModal] = useState(true);

  const isMobile = FMbreakPoint("(max-width: 1124px)");

  if (route !== "(checkout)")
    return (
      <>
        <motion.div
          className={`border-l lg:sticky right-0 fixed bg-white lg:w-auto w-full left-0 lg:h-auto  overflow-y-scroll transition-all h-[80vh] bottom-0 rounded-t-xl z-50`}
          animate={{
            y: OpenModal && isMobile ? "0" : "100%",
          }}
          transition={{
            type: "just",
            duration: 0.4,
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
            >
              <IoClose size={26} />
            </IconButton>
          </div>

          <div className="flex p-4 flex-col gap-5">
            <div className="flex flex-col gap-4 mt-5">
              <OrderCard
                category="burgers"
                img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                price="12.000 IQD"
                title="classic x burger"
              />
              <OrderCard
                category="burgers"
                img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                price="12.000 IQD"
                title="classic x burger"
              />
              <OrderCard
                category="burgers"
                img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                price="12.000 IQD"
                title="classic x burger"
              />
            </div>

            <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

            <div className="flex text-xl gap-3 flex-col">
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Amount</div>
                <div className="font-bold">4 Items</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Order Price</div>
                <div className="font-bold">36.000 IQD</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-zinc-400">Delivery</div>
                <div className="font-bold">5.000 IQD</div>
              </div>
            </div>

            <div className="h-[.08em] w-full rounded-full bg-zinc-300 px-10" />

            <div className="flex justify-between font-bold text-xl">
              <div>Total Price</div>

              <div>41.000 IQD</div>
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
              onClick={() => setOpenModal(false)}
              className="fixed z-40 bottom-0 left-0 w-full h-full lg:hidden bg-black/50"
            />
          )}
        </AnimatePresence>

        <IconButton
          intent={"primary"}
          rounded={"full"}
          className="fixed right-4 bottom-20"
          size={"md"}
          onClick={() => setOpenModal(!OpenModal)}
        >
          <AiOutlineShopping size={24} />
        </IconButton>
      </>
    );
  else return <></>;
}
