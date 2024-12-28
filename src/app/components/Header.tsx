"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession(); // Get the session object
  const [isMenuShown, setMenuShown] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  
  // On initial render, check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Effect to set the body class based on the dark mode state
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuShown(!isMenuShown);

  return (
    <nav className="bg-card shadow-xl py-3">
      <div className="lg:mx-auto px-10 lg:max-w-screen-xl flex justify-between items-center">
        <div className="self-start flex items-center gap-x-2 bg-card p-2 rounded-md">
          <Image
            className="h-12 w-fit rounded-md "
            src="https://play-lh.googleusercontent.com/I8NUyhq9CVcHWr4tPkujRk2eDHN9Yr2yIg0VorjzeDYYiW7vtzJ4aoKlIoFNDSXrDjM=w240-h480-rw"
            alt="EasyTrade Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl text-text text-gray-800 inter font-bold">
            EasyTrade
          </h1>
        </div>

        <ul className="space-x-4 hidden lg:flex lg:m-auto">
          <li>
            <Link className="text-lg text-text hover:text-textHover" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-lg text-text hover:text-textHover"
              href="/portfolio"
            >
              My Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="text-lg text-text hover:text-textHover"
              href="/tradingJournal"
            >
              Trading Journal
            </Link>
          </li>
        </ul>

        <ul className="items-center justify-center space-x-4 hidden lg:flex ">
          {session ? (
            <li className="flex items-center justify-center space-x-2">
              {/* Render the user's name and sign-out button if logged in */}
              <Image
                alt="User profile picture"
                className="rounded-full size-10"
                src={session.user?.image || "/default-profile.png"} // Fallback image
                width={40} // Explicit width
                height={40} // Explicit height
              />
              <span className="text-text mr-4">
                Hello, {session.user?.name}
              </span>
              <button
                className="border-red-500 text-red-500 border-2 rounded-md py-2 px-2 hover:bg-red-50"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li>
              {/* Show sign-in button if not authenticated */}
              <button
                className="rounded-md bg-complement text-white px-5 py-2 font-normal hover:bg-complementHover"
                onClick={() => signIn("google")}
              >
                Sign In with Google
              </button>
            </li>
          )}
          <li>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center h-8 w-16 hover:bg-slate-200 rounded-full transition-colors duration-300 ease-in-out ${
                isDarkMode ? "bg-textSecondary" : "bg-cardHover"
              }`}
            >
              <span
                className={`transform transition duration-300 ease-in-out inline-block h-6 w-6 rounded-full bg-white shadow-md ${
                  isDarkMode ? "translate-x-8" : "translate-x-2"
                }`}
              />
            </button>
          </li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} />
      </div>
      {isMenuShown && (
        <DropDownMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      )}
    </nav>
  );
}
