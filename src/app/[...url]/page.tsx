import {ragChat} from "@/lib/rag-chat";
import {redis} from "@/lib/redis";
import {ChatWrapper} from "@/components/ChatWrapper";
import {cookies} from "next/headers";
import {Header} from "@/components/Header";

interface PageProps {
    params: {
        url: string | string [] | undefined
    }
}

function reconstructUrl({url}: { url: string[] }) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join("/");
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
            <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-hidden">
                    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages}/>
                </div>
            </div>
        </div>
    );
};

export default Page;
