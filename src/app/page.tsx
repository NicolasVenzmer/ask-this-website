"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {Header} from "@/components/Header";
import {Session} from "next-auth";

interface UserNameProps {
    session?: Session | null;
    status?: string;
}

const newsCards = [
    {
        title: "OpenAI Rolls Out ChatGPT Search Features to All Users",
        link: "https://www.bloomberg.com/news/articles/2024-12-16/openai-rolls-out-chatgpt-search-features-to-all-users?srnd=phx-technology"
    },
    {
        title: "MicroStrategy Buys More Bitcoin Ahead of Joining Nasdaq 100",
        link: "https://www.bloomberg.com/news/articles/2024-12-16/microstrategy-buys-more-bitcoin-ahead-of-joining-nasdaq-100?srnd=phx-technology"
    },
    {
        title: "TikTok CEO Chew Met Trump at Mar-a-Lago Ahead of US Ban",
        link: "https://www.bloomberg.com/news/articles/2024-12-16/tiktok-ceo-chew-met-trump-at-mar-a-lago-ahead-of-us-ban?srnd=phx-technology"
    },
];

const UserName = ({session, status}: UserNameProps) => {
    if (status === "loading") {
        return <div className="h-6 w-32 bg-zinc-700 animate-pulse rounded"></div>;
    }
    return (
        session && (
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-zinc-200 break-words sm:break-normal mb-8">
                {session?.user?.name} <br/> Let&apos;s <span className="text-blue-500">Dive In</span>!
            </h2>
        )
    );
};

const Home: React.FC = () => {
    const {data: session, status} = useSession();
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

    const handleCard = (link: string) => {
        const redirectUrl = `/${link}`;
        router.push(redirectUrl);
    };

    return (
        <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
            <Header/>
            <div
                className="flex flex-col flex-1 items-center justify-evenly w-full h-full px-4">
                <UserName session={session} status={status}/>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
                    {newsCards.map((card) => (
                        <div
                            key={card.link}
                            className="bg-zinc-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-zinc-700 transition-colors"
                            onClick={() => handleCard(card.link)}
                        >
                            <h3 className="text-lg font-semibold text-zinc-200 mb-2">{card.title}</h3>
                        </div>
                    ))}
                </div>
                <p className="text-zinc-400 max-w-full sm:max-w-lg mx-auto text-center">
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
