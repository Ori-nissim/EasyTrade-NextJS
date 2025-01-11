import { Trade } from "@/app/lib/definitions";
import TradeListItem from "./TradeListIem";
import { format } from "date-fns";

interface TradeListProps {
    trades: Trade[]; 
  }
  
  const groupTradesByMonthYear = (trades: Trade[]) => {
    const grouped: { [key: string]: Trade[] } = {};
  
    // Sort trades by date (oldest first)
    trades.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
    trades.forEach((trade) => {
      const monthYear = format(new Date(trade.date), "MMMM yyyy");
      
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(trade);
    });
  
    return grouped;
  };
  

  export default function TradeList({ trades }: TradeListProps) {
    
    const groupedTrades = groupTradesByMonthYear(trades)

    return(
      <div className="w-full md:w-2/3 bg-card p-4 rounded-lg shadow-md my-5 text-text max-h-screen overflow-y-scroll">
      <h1 className="font-bold text-2xl text-text mb-4">All Trades</h1>
      {trades.length === 0 ? ( // Check if there are no trades
        <div>Nothing to show,  Add a new trade!</div>
      ) : (
        Object.keys(groupedTrades).map((monthYear) => (
          <div key={monthYear}>
            <h1 className="font-semibold text-xl text-text my-3">{monthYear}</h1>
            {groupedTrades[monthYear].map((trade, index) => (
              <TradeListItem key={index} trade={trade} />
            ))}
          </div>
        ))
      )}

      </div>
    );
}