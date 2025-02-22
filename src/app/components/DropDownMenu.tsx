"use client";

import { Session } from "next-auth";
import LogInSignUp from "./UserProfile/LogInSignUp";
import NavRoutes from "./NavRoutes";
import { forwardRef } from "react";

const DropDownMenu = forwardRef<
  HTMLDivElement,
  {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    status: string;
    session: Session | null;
  }
>(({ toggleDarkMode, isDarkMode, status, session }, ref) => {
  return (
    <div
      ref={ref} // Attach ref to the dropdown menu
      className="absolute top-16 right-0 h-80 w-60 bg-card text-text shadow-md lg:hidden border-1 border-textNav rounded-md"
    >
      <div className="flex flex-col space-y-2 p-4">
        <LogInSignUp
          session={session}
          status={status}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <NavRoutes />
      </div>
    </div>
  );
});

DropDownMenu.displayName = "DropDownMenu";
export default DropDownMenu;
