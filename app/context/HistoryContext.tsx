import React, { createContext, useContext, useState } from "react";

export type HistoryItem = {
  id: string;
  refNumber: string;
  paymentTime: string;
  totalPrice: number;
  adminFee: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  products: {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
    image: any;
  }[];
  status: "completed" | "processing" | "cancelled";
};

type HistoryContextType = {
  historyItems: HistoryItem[];
  addHistory: (item: HistoryItem) => void;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  const addHistory = (item: HistoryItem) => {
    setHistoryItems((prev) => [item, ...prev]);
  };

  return (
    <HistoryContext.Provider value={{ historyItems, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const ctx = useContext(HistoryContext);
  if (!ctx) throw new Error("useHistory must be used within HistoryProvider");
  return ctx;
};
