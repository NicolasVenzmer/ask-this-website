"use client"
import {Login} from "@/components/Login";
import {Header} from "@/components/Header";

export default function LoginPage() {
    return (
        <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
            <Header/>
            <Login/>
        </div>
    )
}