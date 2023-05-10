"use client";
import { createContext, useContext, useState } from "react";

// Define the context and its TypeScript interface
interface OrderContextData {
  Orders: {
    _id: string;
    restaurant_id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: string;
  }[];
  setOrders: any;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export default function MainContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Orders, setOrders] = useState([]);

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
