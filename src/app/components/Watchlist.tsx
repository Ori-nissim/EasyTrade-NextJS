"use client"

import { useSession } from "next-auth/react";
import StockQuoteItem from "./StockQuoteItem";



export default  function Watchlist() {
    const { data: session } = useSession(); // Get the session object
    const symbols = ["IBM", "AAPL", "GOOGL"];
    
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

    
    return (
        <div className="w-full md:w-1/2 ">
            <h1 className="font-bold text-2xl text-text mb-1 ">{session?.user? session?.user.name?.split(" ")[0] + "'s " :""} Watchlist</h1>
           
                 

        </div>
    );
}

/*
const fetchStock = async (symbol: string) => {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=` + apiKey);
        return response.json();
    };

    // Call fetchStock with each symbol
    const stockData = await Promise.all(symbols.map(fetchStock));

   {stockData && (stockData.map((quote, index) => {
                        const globalQuote = quote["Global Quote"];
                        return (
                            <StockQuoteItem
                                key={index}
                                symbol={globalQuote["01. symbol"]}
                                price={globalQuote["08. previous close"]}
                                change={globalQuote["09. change"]}
                                changePercent={globalQuote["10. change percent"]}

                            ></StockQuoteItem>

                        );
                    }))}
*/