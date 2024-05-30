'use client'
import { user } from '@/types/user'
import React, { useState } from 'react'
import Conversation from './Conversation'

type Props = {
    users: user[]
}

const Body = ({ users }: Props) => {
    const [activeId, setActiveId] = useState<string>()
    return (
        <div className='flex flex-col w-full p-4 overflow-auto'>
            <input
                type="text"
                className='w-full px-5 py-2.5 rounded-2xl bg-[#F3F3F3] outline-none'
                placeholder='جستجو کنید'
            />
            <div className='overflow-auto -m-4 p-4 pt-0 mt-3' id='scroll'>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    {users.map(user => (
                        <Conversation
                            key={user._id}
                            lastMessage={{ time: user.updatedAt, message: 'سلام' }}
                            active={activeId === user._id}
                            profile='/images/png/user.png'
                            fullName={user.fullName}
                            setActive={()=>setActiveId(user._id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Body