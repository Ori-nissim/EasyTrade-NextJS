"use client";

import { useDebouncedCallback } from "use-debounce";
import fetchTickerSearchResults from "../lib/data";
import { useState } from "react";

export default function TickerSearchInput() {
    const [inputValue, setInputValue] = useState(""); // Track the input field value
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = useDebouncedCallback(async (queryInput: string) => {
        if (queryInput !== "") {
            const res = await fetchTickerSearchResults(queryInput);
            setSearchResults(res["bestMatches"] || []);
        } else {
            setSearchResults([]);
        }
    }, 300);

    const handleResultClick = (newInputValue: string) => {
        setInputValue(newInputValue); // Update the input field value
        setSearchResults([]); // Clear the search results
    };

    return (
        <div className="relative">
            <label htmlFor="symbol" className="block mb-1 text-textSecondary">
                Symbol
            </label>
            <div className="flex items-center gap-x-2 p-2 border rounded-md bg-background text-text">
                {/* Magnifying glass icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clipRule="evenodd"
                    />
                </svg>

                <input
                    type="text"
                    name="symbol"
                    required
                    className="w-full placeholder:textHover focus:border-complement bg-background text-text"
                    placeholder="Start typing to search..."
                    value={inputValue} // Bind the input field value
                    onChange={(e) => {
                        setInputValue(e.target.value); // Update input value
                        handleSearch(e.target.value); // Trigger search
                    }}
                />
            </div>
            <div>
                {/* Search Results list */}
                {searchResults && searchResults.length > 0 && (
                    <ul className="absolute z-10 bg-background p-2 border rounded-md w-full max-h-60 overflow-y-auto">
                        {searchResults.map((resItem, key) => (
                            <li
                                key={key}
                                className="bg-textTitle rounded-sm my-2 p-1 hover:bg-cardHover cursor-pointer"
                                onClick={() => handleResultClick(resItem["1. symbol"])} // Update input on click
                            >
                                {resItem["1. symbol"]} - {resItem["2. name"]}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
