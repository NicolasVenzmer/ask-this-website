"use client"
import React from "react";
import {Briefcase} from "lucide-react";
import {Button} from "@nextui-org/react";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

export const Header = () => {
    const {data: session} = useSession();
    const handlePortfolio = () => {
        window.open("https://nicolasvenzmer.netlify.app/", "_blank");
    }
    const handleSignOut = async () => {
        await signOut();
        document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    return (
        <header className="w-full py-6 bg-zinc-900 top-0 left-0 relative">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
                <a href="/">
                    <h1 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal">
                        Meet &lt;<span className="text-blue-500">Milo</span>/&gt;
                    </h1>
                </a>
                <nav className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 items-center justify-center">
                    <div className="relative group">
                        <Button onPress={handlePortfolio} className="group-hover:bg-transparent">
                            <Briefcase/>
                        </Button>
                        <div
                            className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Portfolio
                        </div>
                    </div>
                    {session && <div className="relative group">
                        <Image
                            onClick={handleSignOut}
                            className="rounded-full bg-color-none hover:bg-zinc-700 hover:cursor-pointer"
                            src={session?.user?.image}
                            height={35}
                            width={35}
                            alt="user-image"
                        />
                        <div
                            className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            LogOut
                        </div>
                    </div>}
                </nav>
            </div>
        </header>
    );
}
