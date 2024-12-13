"use client"
import {signIn} from "next-auth/react";
import React from "react";

export const Login = () => {
    return (
        <div
            className="pt-24 flex flex-col flex-1 items-center justify-center w-full h-full sm:pt-32 px-4 sm:px-6">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal mb-8">
                Welcome! Please <span className="text-blue-500">Sign In</span> To Continue.
            </h2>
            <p className="text-zinc-400 max-w-full sm:max-w-lg mx-auto mb-8 text-center">
                To access all the features and personalize your experience, we need you to sign in. It&apos;s quick and
                easy!
                Simply enter your credentials to get started.
            </p>
            <div
                className="bg-zinc-800 p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-96 max-w-full mx-auto"
            >
                <button
                    onClick={() => signIn("google")}
                    type="submit"
                    className="w-full px-4 py-2 bg-zinc-600 hover:bg-zinc-500 text-zinc-100 font-medium rounded-md transition-colors duration-200"
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}