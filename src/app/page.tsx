"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const Home: React.FC = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url) {
            setLoading(true);
            const newUrl = `/${encodeURIComponent(url)}/`;
            router.push(newUrl);
        } else {
            alert("Please enter a valid URL.");
        }
    };

    return (
        <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
            <header className="w-full py-6 bg-zinc-800 fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
                    <h1 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal">
                        Meet &lt;<span className="text-blue-500">Milo</span>/&gt;
                    </h1>
                    <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <a
                            href="https://github.com/NicolasVenzmer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://nicolasvenzmer.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100"
                        >
                            Portfolio
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100"
                        >
                            LinkedIn
                        </a>
                    </nav>
                </div>
            </header>

            <div
                className="pt-24 flex flex-col absolute items-center justify-center w-full h-full sm:pt-32 px-4 sm:px-6">
                <h2 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal mb-8">
                    Let's <span className="text-blue-500">Dive In</span>
                </h2>
                <p className="text-zinc-400 max-w-full sm:max-w-lg mx-auto mb-8 text-center">
                    Enter a website below, and Milo will be ready to chat and provide insights about the site!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-zinc-800 p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-96 max-w-full mx-auto"
                >
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    />
                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-zinc-600 hover:bg-zinc-500 text-zinc-100 font-medium rounded-md transition-colors duration-200"
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
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
