"use client";

import { SessionProvider } from "next-auth/react";
import NewTradeForm, { Trade } from "./components/NewTradeForm";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import TradeList from "./components/TradesList";
import { useState } from "react";

export default function TradingJournal() {
  const [trades,setTrades] = useState<Trade[]>([]);

  const addTrade = (trade:Trade) => {
    setTrades([...trades, trade])
  }
  return (
    <SessionProvider>
       <Header />
        <ContentContainer>
          <h1 className="text-3xl font-semibold">
            Trading Journal
          </h1>
        <div className="flex flex-col md:flex-row gap-x-4">
        <NewTradeForm addTrade={addTrade}/>
        <TradeList trades={trades}/>
        </div>
        </ContentContainer>
        
    </SessionProvider>
  );
}

