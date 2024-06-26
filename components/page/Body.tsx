'use client'
import { user } from '@/types/user'
import { useContext, useEffect, useMemo, useState } from 'react'
import Conversations from '@/components/page/Conversations'
import Header from '@/components/page/Header'
import Conversation from '@/components/page/Conversation'
import { Context, Me } from '@/context/Context'

type Props = {
    users?: user[]
    me: Me
}

const Body = ({ users, me }: Props) => {
    const { setMe } = useContext(Context)

    const [search, setSearch] = useState<string>('')

    const [selectUser, setSelectUser] = useState<user | null>(null)
    const [animateUser, setAnimateUser] = useState(false)

    const searchedUsers = useMemo(() => users?.filter((user) => user.fullName.includes(search.trim())), [search])

    const setNullUser = () => {
        setAnimateUser(false)
        setTimeout(() => setSelectUser(null), 300)
    }

    const setActive = (user: user) => {
        setSelectUser(user)
        setAnimateUser(true)
    }

    useEffect(() => {
        me && setMe(me)
    }, [])

    return (
        <div className='relative flex items-center justify-center h-screen'>
            <div className='w-full sm:w-2/3 h-full'>
                <Header />
                <div className='flex flex-col w-full p-4 overflow-auto h-full'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className='w-full px-5 py-2.5 rounded-2xl bg-[#F3F3F3] outline-none'
                        placeholder='جستجو کنید'
                    />
                    <div className='overflow-auto -m-4 p-4 pt-0 mt-3' id='scroll'>
                        <div className='w-full flex flex-col items-center justify-center gap-2'>
                            {searchedUsers?.map(user => (
                                <Conversations
                                    key={user._id}
                                    lastMessage={{ time: user.updatedAt, message: 'سلام' }}
                                    active={selectUser?._id === user._id}
                                    profile={user.profilePic}
                                    fullName={user.fullName}
                                    setActive={() => setActive(user)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Conversation user={selectUser} setNull={setNullUser} animate={animateUser} />
        </div>
    )
}

export default Body