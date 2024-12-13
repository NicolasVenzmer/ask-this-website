"use client"

import {useChat, Message} from "ai/react";
import {Messages} from "./Messages";
import {ChatInput} from "./ChatInput";

export const ChatWrapper = ({sessionId, initialMessages}: { sessionId: string, initialMessages: Message[] }) => {
    const {isLoading, messages, handleInputChange, handleSubmit, input, setInput} = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
        initialMessages,
    })

    return (
        <div className="flex flex-col min-h-[calc(100vh-3.5rem-7rem)] bg-zinc-900">
            <div className="flex-1 bg-zinc-800 flex flex-col divide-y divide-zinc-700">
                <div className="flex-1 overflow-y-auto">
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
        </div>
    )
}
