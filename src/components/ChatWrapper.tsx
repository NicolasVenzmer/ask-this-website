"use client"

import {useChat, Message} from "ai/react";
import {Messages} from "./Messages";
import {ChatInput} from "./ChatInput";
import {useRouter} from "next/navigation";

export const ChatWrapper = ({sessionId, initialMessages}: { sessionId: string, initialMessages: Message[] }) => {
    const router = useRouter();
    const {isLoading, messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
        initialMessages,
    })

    const handleGoHome = () => {
        router.push("/");
    };

    return (
        <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
            <div className="flex-1 text-block bg-zinc-800 justify-between flex flex-col">
                <Messages messages={messages}/>
            </div>
            <ChatInput
                handleGoHome={handleGoHome}
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                setInput={setInput}
                isLoading={isLoading}
            />
        </div>
    )
}