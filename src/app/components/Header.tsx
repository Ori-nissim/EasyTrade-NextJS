"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";



export default function Header() {
    const [isMenuShown, setMenuShown] = useState(false);

    // Toggle function to show/hide the menu
    const toggleMenu = () => {
        setMenuShown(!isMenuShown);
    };

    return (
        <nav className="bg-white shadow-md px-4 py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/*<img src="/logo.png" alt="EasyTrade Logo" className="h-10 mr-2" />  Add your logo here */}
                    <h1 className="text-2xl text-gray-800 inter font-bold ">EasyTrade</h1>
                </div>
                <ul className="space-x-4 hidden sm:flex">
                    <li><a className="hover:text-blue-600" href="/">Home</a></li>
                    <li><a className="hover:text-blue-600" href="/portfolio">My Portfolio</a></li>
                    <li><a className="hover:text-blue-600" href="/journal">Trading Journal</a></li>
                </ul>
                
                <ul className="flex space-x-4 hidden sm:flex">
                    <li><a className="rounded-md bg-blue-500 text-white px-4 py-2 font-bold hover:bg-blue-600" href="/log-in">Log In</a></li>
                    <li><a className="border-black border-2 border- rounded-md p-2 hover:text-blue-600 hover:border-blue-600" href="/sign-up">Sign Up</a></li>
                </ul>
                <BurgerMenu toggleMenu={toggleMenu} />
            </div>
            {isMenuShown && <DropDownMenu />}
            
        </nav>
    );
}
