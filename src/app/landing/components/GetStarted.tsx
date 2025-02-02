"use client";

import { signIn } from "next-auth/react";

export default function GetStarted() {
  return (
    <button
      className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
      onClick={() => signIn("google")}
    >
      Get Started Free
    </button>
  );
}
