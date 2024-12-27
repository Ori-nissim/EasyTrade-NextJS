"use client";
import { Trade } from "@/app/lib/definitions";
import { useSession } from "next-auth/react";
import { useState } from "react";


interface NewTradeFormProps {
  addTrade: (trade: Trade) => void; // Define the type for the addTrade prop
}

export default function NewTradeForm({ addTrade }: NewTradeFormProps) {
  const [formData, setFormData] = useState({ symbol: "", amount: "", date: "", transaction: "", price: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  const requestData = {
    email: session?.user?.email,
    ...formData,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    // Format the trade data
    const tradeData: Trade = {
      email: session?.user?.email || "", // Ensure email is a string
      symbol: formData.symbol,
      amount: Number(formData.amount),     // Convert amount to a number
      date: formData.date,
      transaction: formData.transaction as 'buy' | 'sell', // Cast to the appropriate type
      price: Number(formData.price),        // Convert price to a number
      description: formData.description,
    };

    // Pass the trade data to the addTrade function
    addTrade(tradeData);
    
    // Clear the form after submission
    //setFormData({ symbol: "", amount: "", date: "", transaction: "", price: "", description: "" });

    setIsSubmitting(false)
    /* Code for http request - Save in database
    try {
      const response = await fetch(`/api/addTrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) throw new Error("Failed to submit data");

      const result = await response.json();
      console.log("Record added:", result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
      */

    // Save the trade locally

  };

  return (
    <div className="min-w-52 md:w-1/4 bg-card p-4 rounded-lg shadow-md my-5 text-text">
      <h1 className="font-bold text-xl text-text mb-4">Add New Trade</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="symbol" className="block mb-1 text-textSecondary">Symbol</label>
          <input
            type="text"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 text-textSecondary">Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block mb-1 text-textSecondary">Amount</label>
          <input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 text-textSecondary">Date</label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="transaction" className="block mb-1 text-textSecondary">Action Type</label>
          <select
            name="transaction"
            value={formData.transaction}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text focus:border-complement"
          >
            <option value="" disabled>Select action</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 text-textSecondary">Description</label>
          <textarea
            name="description"
            placeholder="Why did you buy/sell? Share your thoughts about the market direction"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-complement hover:bg-complementHover text-white font-semibold py-2 rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Add Trade"}
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
}
