"use client"

import {useChat, Message} from "ai/react";
import {Messages} from "./Messages";
import {ChatInput} from "./ChatInput";

export const ChatWrapper = ({sessionId, initialMessages, title, url}: {
    sessionId: string,
    initialMessages: Message[],
    title: string,
    url: string,
}) => {
    const {isLoading, messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
        initialMessages,
    })

    const handleTitle = () => {
        window.open(url, "_blank");
    }

    return (
        <div className="flex flex-col flex-1 bg-zinc-900">
            <div className="flex items-center justify-center pb-2">
                <a
                    onClick={handleTitle}
                    className="text-2xl font-bold text-white hover:cursor-pointer hover:text-blue-300 transition-all"
                    title={title}
                >
                    <h1
                        className="truncate max-w-xs sm:max-w-sm md:max-w-md"
                    >
                        {title}
                    </h1>
                </a>
            </div>
            <div
                className="flex-1 overflow-y-auto max-h-[calc(100vh-16rem)]  sm:max-h-[calc(100vh-17rem)] divide-y divide-zinc-700">
                <Messages messages={messages}/>
            </div>
            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
                isLoading={isLoading}
            />
        </div>
    )
}
