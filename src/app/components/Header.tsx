"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import BurgerMenu from "./BurgerMenu";
import DropDownMenu from "./DropDownMenu";
import LogInSignUp from "./UserProfile/LogInSignUp";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import GraphtitudeLogo from "./GraphtitudeLogo";
import NavRoutes from "./NavRoutes";

export default function Header() {
  const { data: session, status } = useSession({ required: true });
  const [isMenuShown, setMenuShown] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

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

  // Toggle menu visibility - small screens
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-card py-2 fixed top-0 w-full backdrop-blur-2xl shadow-lg z-50">
      <div className="lg:mx-auto px-10 lg:max-w-screen-xl flex justify-between items-center rtl:flex-row-reverse">
        <Link href="/">
          <GraphtitudeLogo />
        </Link>
        <div className="hidden lg:block">
          <NavRoutes />
        </div>

        <ul className="items-center justify-center space-x-5 hidden lg:flex ">
          <LogInSignUp
            session={session}
            status={status}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <li></li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} />
      </div>
      {isMenuShown && (
        <DropDownMenu
          ref={menuRef} // Attach ref to DropDownMenu
          session={session}
          status={status}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </nav>
  );
}
