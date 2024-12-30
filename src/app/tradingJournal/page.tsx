"use client";

import NewTradeForm from "./components/NewTradeForm";
import { Trade } from "../lib/definitions";
import TradeList from "./components/TradesList";
import { useState } from "react";

export default function TradingJournal() {
  const [trades, setTrades] = useState<Trade[]>([]);
  
  const addTrade = (trade: Trade) => {
    setTrades([...trades, trade])
  }
  return (
    <div className="w-full">
    <h1 className="text-3xl text-text font-semibold">Trading Journal</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <NewTradeForm addTrade={addTrade} />
      <TradeList trades={trades} />
     
    </div>
  </div>
  );
}

