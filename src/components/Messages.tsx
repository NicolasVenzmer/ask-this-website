import {type Message as TMessage} from "ai/react";
import {Message} from "./Message";
import {MessageSquare} from "lucide-react";
import {useEffect, useRef} from "react";

interface MessagesProps {
    messages: TMessage[]
}

export const Messages = ({messages}: MessagesProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    return (
        <div
            ref={containerRef}
            className="flex flex-col overflow-y-auto"
        >
            {messages.length ? (
                messages.map((message, i) => (
                    <Message
                        key={i}
                        content={message.content}
                        isUserMessage={message.role === "user"}
                    />
                ))
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-2 py-5">
                    <MessageSquare className="size-8 text-blue-500"/>
                    <h3 className="font-semibold text-xl text-white">You are all set!</h3>
                    <p className="text-zinc-500 text-sm">Ask your first question to get started.</p>
                </div>
            )}
            <div ref={messagesEndRef}/>
        </div>
    );
};
