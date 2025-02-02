"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";
import LogInSignUp from "./LogInSignUp";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import GraphtitudeLogo from "./GraphtitudeLogo";
import NavRoutes from "./NavRoutes";
import { useTranslations } from "next-intl";


export default function Header() {
  const { data: session } = useSession(); // Get the session object
  const [isMenuShown, setMenuShown] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const t = useTranslations('Header');

  // On initial render, check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
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
    <nav className="bg-card py-2 fixed top-0 w-full backdrop-blur-2xl shadow-lg z-50">
      <div className="lg:mx-auto px-10 lg:max-w-screen-xl flex justify-between items-center">
        <Link href="/">
          <GraphtitudeLogo />
        </Link>

        <NavRoutes />
        <ul className="items-center justify-center space-x-5 hidden lg:flex ">
          <LogInSignUp session={session} />
          <li>
            <ToggleTheme
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} />
      </div>
      {isMenuShown && (
        <DropDownMenu
          session={session}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </nav>
  );
}
