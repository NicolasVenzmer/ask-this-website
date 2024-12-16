import {cn} from "@/lib/utils";
import {Bot} from "lucide-react";
import UserAvatar from "@/components/UserAvatar";
import {signOut} from "next-auth/react";

interface MessageProps {
    content: string
    isUserMessage: boolean
}

export const Message = ({content, isUserMessage}: MessageProps) => {
    return <div className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage
    })}>
        <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div
                    className={cn("size-10 shrink-0 aspect-square rounded-full border border-blue-300 gb-zinc-900 flex justify-center items-center",
                        {
                            "bg-zinc-950 border-zinc-950s text-zinc-200": isUserMessage
                        },
                        {
                            "bg-blue-500": !isUserMessage
                        }
                    )}>
                    {isUserMessage ? <UserAvatar onSignOut={signOut}/> : <Bot className="size-5 text-white"/>}
                </div>
                <div className="flex flex-col ml-6 w-full">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {isUserMessage ? "You" : "Milo"}
                        </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
                </div>
            </div>
        </div>
    </div>
}