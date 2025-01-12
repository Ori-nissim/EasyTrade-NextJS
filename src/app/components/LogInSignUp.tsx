import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LogInSignUp(props: {session : Session}) {
    return (
        <div>
            {props.session ? (
            <li className="flex flex-col md:flex-row items-center justify-center space-x-2">
              {/* Render the user's name and sign-out button if logged in */}
              <Image
                alt="User profile picture"
                className="rounded-full size-10"
                src={props.session.user?.image || "/default-profile.png"} // Fallback image
                width={40} // Explicit width
                height={40} // Explicit height
              />
              <span className="text-text mr-4">
                Hello, {props.session.user?.name}
              </span>
              <button
                className="border-red-500 text-red-500 border-2 rounded-2xl py-2 px-2 hover:bg-red-50"
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
                Sign In with Google Account
              </button>
            </li>
          )}
        </div>
    );
}