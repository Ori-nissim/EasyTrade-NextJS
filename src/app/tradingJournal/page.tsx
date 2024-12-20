"use client";

import NewTradeForm, { Trade } from "./components/NewTradeForm";
import TradeList from "./components/TradesList";
import { useState } from "react";

export default function TradingJournal() {
  const [trades, setTrades] = useState<Trade[]>([]);

  const addTrade = (trade: Trade) => {
    setTrades([...trades, trade])
  }
  return (
    <div className="w-full">
    <h1 className="text-3xl font-semibold">Trading Journal</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <NewTradeForm addTrade={addTrade} />
      <TradeList trades={trades} />
     
    </div>
  </div>
  );
}

