"use client";

import { useState, useRef, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { LogIn, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Session } from "next-auth";

export default function LogInSignUp({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      {session ? (
        <div className="flex items-center space-x-3">
          {/* Profile Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center space-x-2"
          >
            <Image
              alt="User profile picture"
              className="rounded-full size-10 cursor-pointer"
              src={session.user?.image || "/default-profile.png"} // Fallback image
              width={40}
              height={40}
            />
            <span className="text-text font-medium hidden md:block">
              Hello, {session.user?.name}
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
                className="absolute top-14 left-0 w-48 bg-card shadow-md rounded-lg border p-2 border-cardHover"
              >
                <a
                  href="/profile"
                  className="flex items-center px-3 py-2 text-textNav hover:bg-cardHover rounded-md"
                >
                  <User size={18} className="mr-2" />
                  Profile
                </a>
                <button
                  onClick={() => signOut()}
                  className="flex items-center w-full text-left px-3 py-2 text-red-600 hover:bg-cardHover rounded-md"
                >
                  <LogOut size={18} className="mr-2" />
                  Sign Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <button
          className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 font-normal hover:bg-complementHover flex gap-x-2"
          onClick={() => signIn("google")}
        >
          <LogIn />
          Sign in with Google
        </button>
      )}
    </div>
  );
}
