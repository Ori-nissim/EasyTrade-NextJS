"use client";

import NewTradeForm from "./components/NewTradeForm";
import { Trade } from "../lib/definitions";
import TradeList from "./components/TradesList";
import { useState } from "react";
import { dummyTrades } from "../lib/data";

export default function TradingJournal() {
  const [trades, setTrades] = useState<Trade[]>([]);
  

  const addTrade = (trade: Trade) => {
    setTrades([...trades, trade])
  }
  return (
    <div className="w-full">
    <h1 className="text-2xl text-text font-semibold">Trading Journal</h1>
    <div className="flex flex-col md:flex-row gap-x-4">
   
      <NewTradeForm addTrade={addTrade} />
      
      <TradeList trades={dummyTrades} />
    </div>
   
  </div>
  );
}

