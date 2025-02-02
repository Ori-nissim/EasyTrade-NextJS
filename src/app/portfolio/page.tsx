"use client"


import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import {  useState } from "react";
import { dummyPortfolio } from "../lib/data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState(dummyPortfolio);

  // Chart Data (Example: Portfolio Value vs. Time or P/L per position)
  const chartData = {
    labels: portfolio.positions.map((position) => position.symbol), // Labels for each stock
    datasets: [
      {
        label: "Profit and Loss per Position",
        data: portfolio.positions.map((position) => position.profitAndLoss), // Profit/Loss values
        backgroundColor: portfolio.positions.map((position) =>
          position.profitAndLoss >= 0 ? "rgba(75, 192, 192, 0.2)" : "rgba(255, 99, 132, 0.2)"
        ),
        borderColor: portfolio.positions.map((position) =>
          position.profitAndLoss >= 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full p-6 bg-background">
      {/* Portfolio Summary Section */}
      <div className="flex gap-4 mb-6">
        <div className="w-1/4 p-4 bg-card rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Portfolio Value (USD)</h3>
          <p className="text-2xl font-bold">${portfolio.amount.amountUSD.toLocaleString()}</p>
        </div>
        <div className="w-1/4 p-4 bg-card rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Profit/Loss</h3>
          <p className={`text-2xl font-bold ${portfolio.profitAndLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
            ${portfolio.profitAndLoss.toLocaleString()}
          </p>
        </div>
        <div className="w-1/4 p-4 bg-card rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Portfolio Value (NIS)</h3>
          <p className="text-2xl font-bold">{portfolio.amount.amountNIS.toLocaleString()} NIS</p>
        </div>
      </div>

      {/* Active Positions Section */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Active Positions</h2>
        {portfolio.positions.map((position, index) => (
          <div key={index} className="card flex justify-between items-center mb-4 p-4">
            <div>
              <h3 className="font-semibold">{position.symbol}</h3>
              <p>
                {position.amount} shares @ ${position.averagePrice} per share
              </p>
            </div>
            <div className={`text-lg font-semibold ${position.profitAndLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${position.profitAndLoss.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Data Insights Section */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Portfolio Insights</h2>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
}
