export type Article =  {
    article: {
        title: string;
        // Add any other properties you need from the article object
        url: string; // Example property, replace with actual properties
        summary: string; // Example property
        banner_image: string;
        source: string
        time_published: string;

    }
}

export type StockQuoteProps = {
    symbol: string,
    price: number,
    change: number,
    changePercent: string,

}

export type Trade = {
    symbol?: string;      // Stock symbol (e.g., AAPL, TSLA)
    amount?: number;      // Amount of shares traded
    date: string;        // Date of the trade in ISO format (e.g., "2024-10-28")
    transaction: 'buy' | 'sell' | 'insights'; // Action type: either "buy" or "sell" or 'insights'
    price?: number;       // Price per share at which the trade was executed
    description: string; // Description or notes about the trade
    currency: 'USD' | 'NIS'; 
  };
  
export interface NewTradeFormProps {
    addTrade: (trade: Trade) => void; // Define the type for the addTrade prop
  }

export type Portfolio = {
    amount: {
        amountNIS: number;
        amountUSD: number;
    };
    profitAndLoss:  {
        amount: number;
        percentage: number;
     }
    positions : Array<openPosition>
}

export type openPosition = {
    symbol: string;             // Stock symbol (e.g., AAPL, TSLA)
    amount: number;             // Amount of shares 
    averagePrice:   number;      // Average Price per share for the entire position
    currency:       'USD' | 'NIS'; 
    profitAndLoss:  {
       amount: number;
       percentage: number;
    }

  };