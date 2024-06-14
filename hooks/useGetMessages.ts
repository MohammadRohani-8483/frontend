import { message } from "@/types/message"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useGetMessages = (selectedUserId: string, mutate: boolean) => {
    const [messages, setMessages] = useState<message[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios(`/api/api/messages/${selectedUserId}`)
            .then(({ data }: { data: message[] }) => setMessages(data))
            .finally(() => setLoading(false))
    }, [selectedUserId, mutate])


    return { messages, loading }
}