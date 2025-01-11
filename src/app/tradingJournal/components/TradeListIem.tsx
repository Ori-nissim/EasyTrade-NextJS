import { Trade } from "@/app/lib/definitions";
import { format } from "date-fns";
import { useState } from "react";

type TradeListItemProps = {
  trade: Trade; // The trade object to display
};

export default function TradeListItem({ trade }: TradeListItemProps) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the dropdown

  let borderColor;
  switch (trade.transaction) {
    case "buy":
      borderColor = "border-green-600";
      break;
    case "sell":
      borderColor = "border-red-600";
      break;
    default:
      borderColor = "border-blue-400";
      break;
  }

  // Toggle the dropdown on click
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div
        className={`flex justify-between tradeCard border-l-4 ${borderColor} cursor-pointer`}
        onClick={toggleDropdown} // Toggle on click
      >

        <div>
          <strong className="border-text border-2 p-2 rounded-md mr-1">
            {trade.symbol}
          </strong>{" "}
          {trade.transaction.toUpperCase()}{" "}
          <strong>{trade.amount}</strong> shares @ <strong>${trade.price}</strong>
        </div>
        <div>{format(new Date(trade.date), "cccc , MMMM dd ")}</div>

        {/* Dropdown Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>

      </div>

      {/* Dropdown Content (hidden or shown based on state) */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-background rounded-md ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="ml-4 p-2">
        <span><strong className="mr-2">Total amount: </strong>  ${trade.amount * trade.price}</span>
        <br/>
          <strong>Description</strong>
          <div className="text-textSecondary">{trade.description}</div>
          

          {/* You can add more data here */}
        </div>
      </div>
    </div>
  );
}
