"use client";
import React from "react";
import {Briefcase} from "lucide-react";
import {Button} from "@nextui-org/react";
import {signOut} from "next-auth/react";
import UserAvatar from "@/components/UserAvatar";

export const Header = () => {
    const handlePortfolio = () => {
        window.open("https://nicolasvenzmer.netlify.app/", "_blank");
    };

    const handleSignOut = async () => {
        await signOut();
        document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };

    return (
        <header className="w-full py-6 bg-zinc-900 top-0 left-0 relative">
            <div className="max-w-7xl mx-auto flex sm:flex-row justify-between items-center px-4 py-4 sm:px-8 ">
                <a href="/">
                    <h1 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal">
                        Meet &lt;<span className="text-blue-500">Milo</span>/&gt;
                    </h1>
                </a>
                <div className="flex sm:flex-row gap-4 items-center justify-center h-full">
                    <div className="relative group">
                        <Button onPress={handlePortfolio} className="group-hover:bg-transparent">
                            <Briefcase/>
                        </Button>
                        <div
                            className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            Portfolio
                        </div>
                    </div>
                    <UserAvatar onSignOut={handleSignOut}/>
                </div>
            </div>
        </header>
    );
};
