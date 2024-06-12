'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export type Me = {
    _id: string
    fullName: string
    username: string
    gender: string
    profilePic: string
    createdAt: string
    updatedAt: string
    __v: 0
}

type Context = {
    socket: Socket | null
    onlineUsers: string[]
    me: Me | null
    setMe: Dispatch<SetStateAction<Me | null>>
}

const initialContext: Context = {
    me: null,
    onlineUsers: [],
    setMe: () => { },
    socket: null
}

export const Context = createContext<Context>(initialContext)

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null)
    const [onlineUsers, setOnlineUsers] = useState<string[]>([])
    const [me, setMe] = useState<Me | null>(null)

    useEffect(() => {
        if (me) {
            const socket = io('http://localhost:8000', {
                query: {
                    userId: me._id
                }
            });

            setSocket(socket)

            socket.on('getOnlineUsers', users => {
                setOnlineUsers(users)
            })

            return () => {
                socket.close()
            };
        }
        else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [me])

    return (
        <Context.Provider value={{ socket, onlineUsers, me, setMe }}>{children}</Context.Provider>
    )
}

export default ContextProvider