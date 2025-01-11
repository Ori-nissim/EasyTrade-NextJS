"use client";

import { Session } from "next-auth";
import LogInSignUp from "./LogInSignUp";
import { NavRoutesItem } from "./NavRoutes";
import ToggleTheme from "./ToggleTheme";

export default function DropDownMenu(props: {
  toggleDarkMode: () => void,
  isDarkMode: boolean,
  session:Session

}


) {
  return (
    <div className="absolute top-16 right-0 w-48 bg-background text-text shadow-md lg:hidden">
      <ul className="flex flex-col space-y-2 p-4">
        <LogInSignUp session={props.session}/>
        <NavRoutesItem path="/" text="Home" />
        <NavRoutesItem path="/tradingJournal" text="Trading Journal" />
        <NavRoutesItem path="/portfolio" text="Portfolio" />
        <ToggleTheme toggleDarkMode={props.toggleDarkMode} isDarkMode={props.isDarkMode} />

      </ul>
    </div>
  );
}
