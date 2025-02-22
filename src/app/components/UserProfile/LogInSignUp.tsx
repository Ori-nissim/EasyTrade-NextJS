"use client";

import { useState, useRef, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { LogIn, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Session } from "next-auth";
import LanguagePicker from "./LanguagePicker";
import ToggleTheme from "../ToggleTheme";
import { useTranslations } from "next-intl";

interface LogInSignUpProps {
  session: Session | null;
  status: string;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function LogInSignUp({
  session,
  status,
  toggleDarkMode,
  isDarkMode,
}: LogInSignUpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("auth");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {status === "loading" ? (
        <div>{t("loading")}</div>
      ) : session ? (
        <div className="flex items-center">
          {/* Profile Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-x-1"
          >
            <Image
              alt={t("profilePicture")}
              className="rounded-full size-10 cursor-pointer"
              src={session.user?.image || "/default-profile.png"} // Fallback image
              width={40}
              height={40}
            />
            <span className="text-text font-medium md:block me-2 rtl:mx-2">
              {t("hello")}, {session.user?.name}
            </span>
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 start-0 w-60 bg-card shadow-md rounded-lg border p-2 border-cardHover"
              >
                <a href="/profile" className="userProfileListItem text-textNav">
                  <User size={18} className="me-2 rtl:ml-2" />
                  {t("profile")}
                </a>
                <LanguagePicker />

                <ToggleTheme
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                />
                <button
                  onClick={() => signOut()}
                  className="userProfileListItem text-red-600"
                >
                  <LogOut size={18} className="me-2 rtl:ml-2" />
                  {t("signOut")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <button
          className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 font-normal hover:bg-complementHover flex gap-s-2"
          onClick={() => signIn("google")}
        >
          <LogIn />
          {t("signInGoogle")}
        </button>
      )}
    </div>
  );
}
