import {ragChat} from "@/lib/rag-chat";
import {redis} from "@/lib/redis";
import {ChatWrapper} from "@/components/ChatWrapper";
import {cookies} from "next/headers";
import {Header} from "@/components/Header";
import {reconstructUrl} from "@/lib/utils";

interface PageProps {
    params: {
        url: string | string [] | undefined
    }
}

const Page = async ({params}: PageProps) => {
    const sessionCookie = cookies().get("sessionId")?.value;
    const reconstructedUrl = reconstructUrl({url: params.url as string[]});
    const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "");
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);

    const initialMessages = await ragChat.history.getMessages({amount: 10, sessionId});

    if (!isAlreadyIndexed) {
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        });
        await redis.sadd("indexed-urls", reconstructedUrl);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <ChatWrapper sessionId={sessionId} initialMessages={initialMessages}/>
        </div>
    );
};

export default Page;
