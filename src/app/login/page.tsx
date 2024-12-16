"use client"
import {Login} from "@/components/Login";
import {Header} from "@/components/Header";

export default function LoginPage() {
    return (
        <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
            <Header/>
            <div className="flex flex-col flex-1 items-center justify-center w-full h-full px-4">
                <Login/>
            </div>
        </div>
    );
}
