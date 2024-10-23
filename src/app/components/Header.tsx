"use client";

import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";

export default function Header() {
    const [isMenuShown, setMenuShown] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);

    // On initial render, check for saved theme preference in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        console.log(savedTheme)
        if (savedTheme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []); // Runs once on component mount

    // Effect to set the body class based on the dark mode state
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]); // Runs effect whenever isDarkMode changes

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Toggle function to show/hide the menu
    const toggleMenu = () => {
        setMenuShown(!isMenuShown);
    };

    return (
        <nav className="bg-card shadow-xl px-4 py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="bg-card p-2 rounded-md">
                        <img
                            className="h-12"
                            src="https://play-lh.googleusercontent.com/I8NUyhq9CVcHWr4tPkujRk2eDHN9Yr2yIg0VorjzeDYYiW7vtzJ4aoKlIoFNDSXrDjM=w240-h480-rw"
                            alt="EasyTrade Logo"
                        />
                    </div>
                    <h1 className="text-2xl text-text text-gray-800 inter font-bold">EasyTrade</h1>
                </div>
                <ul className="space-x-4 hidden md:flex">
                    <li><a className="text-lg text-text hover:text-textHover" href="/">Home</a></li>
                    <li><a className="text-lg text-text hover:text-textHover" href="/portfolio">My Portfolio</a></li>
                    <li><a className="text-lg text-text hover:text-textHover" href="/journal">Trading Journal</a></li>
                </ul>

                <ul className="flex space-x-4 hidden md:flex">
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className={`relative inline-flex items-center h-8 w-16 hover:bg-slate-200 rounded-full transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-textSecondary' : 'bg-cardHover'}`}
                        >
                            <span
                                className={`transform transition duration-300 ease-in-out inline-block h-6 w-6 rounded-full bg-white shadow-md ${isDarkMode ? 'translate-x-8' : 'translate-x-2'}`}
                            />
                        </button>
                    </li>
                    <li><a className="rounded-md bg-complement text-white px-5 py-2 font-normal hover:bg-complementHover" href="/log-in">Log In</a></li>
                    <li><a className="border-text text-text border-2 rounded-md py-2 px-4 hover:text-complementHover hover:border-complementHover" href="/sign-up">Sign Up</a></li>
                </ul>
                <BurgerMenu toggleMenu={toggleMenu} />
            </div>
            {isMenuShown && <DropDownMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        </nav>
    );
}
