import { useChatScroll } from "@/hooks/useChatAppScroll"
import { useGetMessages } from "@/hooks/useGetMessages"
import { user } from "@/types/user"
import { useMemo } from "react"
import Message from "./Message"

type Props = {
    user: user
    mutate: boolean
}

const Messages = (p: Props) => {
    const { messages, loading } = useGetMessages(p.user._id, p.mutate)
    const sortedMessages = useMemo(() => messages.sort((a, b) => {
        var dateA = new Date(a.createdAt).getTime();
        var dateB = new Date(b.createdAt).getTime();
        return dateA > dateB ? 1 : -1;
    }), [messages])
    const ref = useChatScroll(sortedMessages)
    console.log(sortedMessages);

    console.log(sortedMessages);

    return (
        <div className='w-full h-full overflow-hidden overflow-x-hidden'>
            <div ref={ref} className='overflow-auto pt-0 flex items-center justify-start flex-col gap-1 h-full' id='scroll'>
                {!loading ?
                    sortedMessages.length ?
                        sortedMessages?.map((message, i, arr) => {
                            return (
                                <Message
                                    user={p.user}
                                    sender={message.senderId}
                                    isImage={arr[i - 1]?.senderId !== message.senderId}
                                    key={i}
                                    message={message.message}
                                />
                            )
                        })
                        :
                        <p className="h-full text-lg flex items-center">
                            برای شروع پیام دهید
                        </p>
                    :
                    <p className="h-full text-lg flex items-center">
                        منتظر بمانید
                    </p>
                }
            </div>
        </div>
    )
}

export default Messages