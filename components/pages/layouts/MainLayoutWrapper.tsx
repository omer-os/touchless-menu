"use client";
import { createContext, useContext, useState } from "react";

// Define the context and its TypeScript interface

export type OrderInterface = {
  _id: string;
  restaurant_id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  amount: number;
};

interface OrderContextData {
  Orders: OrderInterface[];
  setOrders: React.Dispatch<React.SetStateAction<OrderInterface[]>>;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export default function MainContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Orders, setOrders] = useState<OrderInterface[]>([]);

  return (
    <OrderContext.Provider
      value={{
        Orders: Orders,
        setOrders: setOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// Custom hook to use the order context
export function useOrderContext() {
  return useContext(OrderContext);
}
