
"use client"

import { useSession } from "next-auth/react";

export default function Banner() {
    const { data: session } = useSession(); // Get the session object

    const text = session?.user ? `Welcome back ${session.user.name}`:"Sign in now to unlock more features such as porfolio and trading journal" 

    return (
    <div className="bg-gradient-to-t from-purple-400 to-pink-600 w-full min-h-60 md:w-1/2 rounded-md md:ml-4 mb-2 text-center content-center">
        <p className="font-thin text-4xl text-white mx-10">{text}</p>
        {session?.user?.name && <p className="text-4xl">&#128516;</p>}
    </div>
    );
}