
import { Session } from "next-auth";
import StockQuoteItem from "./StockQuoteItem";

export default async function Watchlist(props: {session:Session}) {

    const symbols = ["IBM", "AAPL", "GOOGL"];
    
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
    const userEmail = props.session?.user?.email || null;
    const userName = props.session?.user?.name || null;

    const fetchStock = async (symbol: string) => {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=` + apiKey);
        return response.json();
    };

    // Call fetchStock with each symbol
    const stockData = await Promise.all(symbols.map(fetchStock));
    
    if (stockData["Global Quote"] === undefined) return (<div>Fetching watchlist failed</div>) 
        
    return (
        <div className="w-full md:w-1/2 ">
            <h1 className="font-bold text-2xl text-text mb-1 ">{userName? userName?.split(" ")[0] + "'s " :""} Watchlist</h1>
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
                 

        </div>
    );
}



   