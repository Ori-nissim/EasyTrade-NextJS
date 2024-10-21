import StockQuoteItem from "./StockQuoteItem";



export default async function StockQuotes() {
    const symbols = ["IBM", "AAPL", "GOOGL"];
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

    const fetchStock = async (symbol: string) => {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=` + apiKey);
        return response.json();
    };

    // Call fetchStock with each symbol
    const stockData = await Promise.all(symbols.map(fetchStock));

    return (
        <div className="w-full md:w-1/2 ">
            <h1 className="font-bold text-xl text-text mb-1 ">Trending Quotes</h1>
           
                    {stockData.map((quote, index) => {
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
                    })}

        </div>
    );
}
