"use client";

import { use } from "react";

let cachedPromise: Promise<string> | null = null;

function fetchData() {
  if (!cachedPromise) {
    cachedPromise = new Promise<string>((resolve) => {
      setTimeout(() => resolve("Data successfully loaded!"), 3000); // 3-second delay
    });
  }
  return cachedPromise;
}

export default function SlowComponent() {
  const data = use(fetchData()); // Use React's `use` hook to suspend rendering

  return (
    <div className="text-center mt-5">
      <h2 className="text-green-500 font-bold">{data}</h2>
    </div>
  );
}
