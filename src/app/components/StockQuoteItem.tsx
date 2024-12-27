import { StockQuoteProps } from "../lib/definitions";


export default function StockQuoteItem({ symbol, price, change, changePercent }: StockQuoteProps) {
    
    const color = change > 0 ? "text-green-600": "text-red-600"
    const isPlus = change > 0 ? "+": ""

    return (
        <div className="bg-card  flex justify-between w-full min-w-60 p-2 my-2 rounded-md">
            <div className="self-top">
                <h2 className="ml-2 font-bold text-blue-700 text-lg">{symbol}</h2>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-text text-lg text-right" >{Number(price).toFixed(2)} $</p>
                <p className={color}>{isPlus + Number(change).toFixed(2)}$ ({isPlus}{changePercent})</p>
            </div>

        </div>

    );
}