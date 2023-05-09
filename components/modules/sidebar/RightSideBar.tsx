"use client";
import OrderCard from "../cards/OrderCard";
import ButtonLink from "@/components/elements/link/ButtonLink";
import { motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export default function RightSideBar() {
  const route = useSelectedLayoutSegment();
  const [OpenModal, setOpenModal] = useState(false);

  if (route !== "(checkout)")
    return (
      <>
        <div
          key={"oierbouetnoi"}
          className={`
        
        border-l p-4 lg:sticky right-0 fixed   
        bg-white lg:w-auto w-full left-0 lg:h-auto  overflow-y-scroll 
transition-all 
h-[80vh] rounded-t-xl

${OpenModal ? "bottom-0 " : "-bottom-full"}
z-50
`}
        >
          <div className="bg-white"></div>

          <div className="text-2xl capitalize font-bold">your orders</div>

          <div className="flex flex-col gap-5">
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
        </div>
        {OpenModal && (
          <motion.div
            onClick={() => setOpenModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          />
        )}
      </>
    );
  else return <></>;
}
