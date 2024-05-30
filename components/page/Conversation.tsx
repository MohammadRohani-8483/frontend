import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    active?: boolean
    lastMessage: { time: string, message: string }
    fullName: string
    profile: string
    setActive: () => void
}

const Conversation = (p: Props) => {
    const now = new Date()
    const lastMessateTime = new Date(p.lastMessage.time)
    const diffrence = +now - +lastMessateTime
    const diff = {
        year: Math.floor(diffrence / 1000 / 60 / 60 / 24 / 365),
        month: Math.floor(diffrence / 1000 / 60 / 60 / 24 / 30),
        week: Math.floor(diffrence / 1000 / 60 / 60 / 24 / 7),
        day: Math.floor(diffrence / 1000 / 60 / 60 / 24),
        hour: Math.floor(diffrence / 1000 / 60 / 60),
        minute: Math.floor(diffrence / 1000 / 60),
    }
    const time = diff.year ?
        `${diff.year} سال پیش`
        :
        diff.month ?
            `${diff.month} ماه پیش`
            :
            diff.week ?
                `${diff.week} هفته پیش`
                :
                diff.day ?
                    `${diff.day} روز پیش`
                    :
                    diff.hour ?
                        `${diff.hour} ساعت پیش`
                        :
                        diff.minute ?
                            `${diff.minute} دقیقه پیش`
                            :
                            `لحظاتی پیش`
    return (
        <div
            onClick={() => p.setActive()}
            className={`w-full flex justify-start items-center p-3 gap-4 ${p.active ? "bg-gray-100" : ""} hover:bg-gray-100 transition-all duration-300 rounded-2xl cursor-pointer`}
        >
            <div className='relative rounded-full aspect-square w-12'>
                <Image
                    src='/images/png/user.png'
                    alt='user'
                    fill
                />
            </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex justify-between items-center'>
                    <p className='font-bold text-sm'>{p.fullName}</p>
                    <p className='text-[10px] text-gray-500'>
                        {time}
                    </p>
                </div>
                <p className='text-xs text-gray-500'>{p.lastMessage.message}</p>
            </div>
        </div>
    )
}

export default Conversation