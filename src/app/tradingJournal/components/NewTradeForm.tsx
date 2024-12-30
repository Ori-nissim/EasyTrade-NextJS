"use client";
import { FormState, formSubmitAction } from "@/app/lib/actions";
import { NewTradeFormProps } from "@/app/lib/definitions";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useFormState } from "react-dom";



export default function NewTradeForm({ addTrade }: NewTradeFormProps) {

  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  const initialState: FormState = { message: null, errors: {} };
  const [currentformData, formAction] = useFormState(formSubmitAction, initialState);



  return (

    <div className="min-w-52 md:w-1/4 bg-card p-4 rounded-lg shadow-md my-5 text-text">
      <h1 className="font-bold text-xl text-text mb-4">Add New Trade</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="symbol" className="block mb-1 text-textSecondary">Symbol</label>
          <input
            type="text"
            name="symbol"
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 text-textSecondary">Price</label>
          <input
            name="price"
            type="number"
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block mb-1 text-textSecondary">Amount</label>
          <input
            name="amount"
            type="number"
            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 text-textSecondary">Date</label>
          <input
            name="date"
            type="date"

            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <div>
          <label htmlFor="transaction" className="block mb-1 text-textSecondary">Action Type</label>
          <select
            name="transaction"

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

            required
            className="w-full p-2 border rounded-md bg-background text-text placeholder:textHover focus:border-complement"
          />
        </div>
        <button
          type="submit"

          className="w-full bg-complement hover:bg-complementHover text-white font-semibold py-2 rounded-md"
        >Add Trade
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
}


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
