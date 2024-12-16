// components/UserAvatar.js
"use client";
import React from "react";
import {useSession} from "next-auth/react";
import Image from "next/image";

interface UserAvatarProps {
    onSignOut: () => void;
}

const UserAvatar = ({onSignOut}: UserAvatarProps) => {
    const {data: session, status} = useSession();

    if (status === "loading") {
        return <div className="h-9 w-9 rounded-full bg-zinc-700 animate-pulse"></div>;
    }
    return (
        session && (
            <div className="relative group">
                <Image
                    onClick={onSignOut}
                    className="rounded-full bg-color-none hover:bg-zinc-700 hover:cursor-pointer"
                    src={session?.user?.image as string}
                    height={35}
                    width={35}
                    alt="user-image"
                />
                <div
                    className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    LogOut
                </div>
            </div>
        )
    );
};

export default UserAvatar;
