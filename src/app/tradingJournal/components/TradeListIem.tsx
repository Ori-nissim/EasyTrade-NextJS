import { Trade } from "./NewTradeForm";

type TradeListItemProps = {
  trade: Trade; // The trade object to display
};

export default function TradeListItem({ trade }: TradeListItemProps) {

 const borderColor = trade.transaction == "buy" ? "border-green-600": "border-red-600"

  return (
    <div className={`flex justify-between bg-card p-4 rounded-sm shadow-md mb-4 text-text border-l-4 ${borderColor}`}  >
      <div>
        <strong>{trade.symbol}</strong> - {trade.transaction} {trade.amount} shares @ ${trade.price}
      </div>
      <div>{trade.date}</div>
    </div>
  );
}
