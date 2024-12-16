"use client"
import {signIn} from "next-auth/react";
import GoogleIcon from "../../public/icons/google-icon.png";
import React, {useState} from "react";

export const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        await signIn("google");
        setLoading(false);
    };
    return (
        <div
            className="flex flex-col flex-1 items-center justify-center w-full h-full sm:pt-32 px-4">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal mb-8">
                Welcome! <span className="text-blue-500">Sign In</span>
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
                    onClick={handleSignIn}
                    type="button"
                    className="flex items-center justify-center w-full h-12 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 font-medium rounded-md transition-colors duration-200"
                >
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path d="M4 12a8 8 0 0 1 16 0" fill="none"/>
                            </svg>
                            Loading...
                        </div>
                    ) : (
                        <>
                            <img
                                src={GoogleIcon.src}
                                alt="Google Icon"
                                className="w-6 h-6 mr-3"
                            />
                            Sign In with Google
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}