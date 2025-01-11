import { Portfolio, Trade } from "./definitions";
const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

export  async function fetchTickerSearchResults(query:string) {
  
  const response = await fetch(
    `https://finnhub.io/api/v1/search?q=`+ query + `&exchange=US&token=` + apiKey
  );

  return await response.json();    
    
}

export  async function fetchEarningsCalender() {
  
    const response = await fetch(
      `https://finnhub.io/api/v1/calendar/earnings?from=2025-01-01&to=2025-03-10&token=` + apiKey
    );
  
    return await response.json();    
      
  }
  

export const dummyTrades: Trade[] = [
  { symbol: "AAPL", amount: 10, date: "2024-10-01", transaction: "buy", price: 150, description: "Bought for long-term investment" , currency:"USD" },
  { symbol: "TSLA", amount: 5, date: "2024-10-05", transaction: "buy", price: 800, description: "Bought before earnings" , currency:"USD" },
  { symbol: "TSLA", amount: 5, date: "2024-10-20", transaction: "sell", price: 850, description: "Sold after earnings report" , currency:"USD" },
  { symbol: "AAPL", amount: 20, date: "2024-11-02", transaction: "buy", price: 155, description: "Increased position", currency:"USD"  },
  { symbol: "GOOGL", amount: 8, date: "2024-11-10", transaction: "buy", price: 2800, description: "Bought after market dip" , currency:"USD" },
  { symbol: "MSFT", amount: 12, date: "2024-11-15", transaction: "buy", price: 310, description: "Diversifying portfolio", currency:"USD"  },
  { symbol: "AAPL", amount: 10, date: "2024-11-20", transaction: "sell", price: 160, description: "Taking partial profits", currency:"USD"  },
  { symbol: "AMZN", amount: 6, date: "2024-11-22", transaction: "buy", price: 3400, description: "Buying into e-commerce growth" , currency:"USD" },
  { symbol: "AMZN", amount: 6, date: "2024-12-01", transaction: "sell", price: 3500, description: "Sold for short-term profit" , currency:"USD" },
  { symbol: "TSLA", amount: 2, date: "2024-12-10", transaction: "insights", price: 900, description: "Analyst call on future growth" , currency:"USD" }
]

export // Dummy Data
const dummyPortfolio: Portfolio = {
    amount: {
        amountNIS: 55000,    // Amount in NIS (New Israeli Shekel)
        amountUSD: 15000,    // Amount in USD (US Dollar)
    },
    profitAndLoss: 3200,     // Total Profit/Loss for the portfolio
    positions: [
        {
            symbol: "AAPL",             // Apple Stock
            amount: 50,                 // 50 shares
            averagePrice: 145,         // Average purchase price
            currency: 'USD',               // 1 represents USD
            profitAndLoss: 1200,       // Profit/Loss from this position
        },
        {
            symbol: "TSLA",             // Tesla Stock
            amount: 30,                 // 30 shares
            averagePrice: 650,         // Average purchase price
            currency: 'USD',               // 1 represents USD
            profitAndLoss: -450,       // Loss from this position
        },
        {
            symbol: "GOOGL",            // Google Stock
            amount: 10,                 // 10 shares
            averagePrice: 2800,        // Average purchase price
            currency: 'USD',               // 1 represents USD
            profitAndLoss: 500,        // Profit from this position
        },
        {
            symbol: "AMZN",             // Amazon Stock
            amount: 15,                 // 15 shares
            averagePrice: 3400,        // Average purchase price
            currency: 'USD',               // 1 represents USD
            profitAndLoss: -150,       // Loss from this position
        },
        {
            symbol: "MSFT",             // Microsoft Stock
            amount: 20,                 // 20 shares
            averagePrice: 300,         // Average purchase price
            currency: 'USD',               // 1 represents USD
            profitAndLoss: 750,        // Profit from this position
        },
        {
          symbol: "ELAL",             // Microsoft Stock
          amount: 20,                 // 20 shares
          averagePrice: 300,         // Average purchase price
          currency: 'NIS',               // 1 represents USD
          profitAndLoss: 750,        // Profit from this position
      },
      {
        symbol: "TEVA",             // Microsoft Stock
        amount: 20,                 // 20 shares
        averagePrice: 300,         // Average purchase price
        currency: 'NIS',               // 1 represents USD
        profitAndLoss: 750,        // Profit from this position
    },
    ]
};
