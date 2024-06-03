import { user } from '@/types/user'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import Icon from '@/components/common/Icon'

type Props = {
    user: user | null
    setNull: () => void
}

const HeaderUser = ({ user, setNull }: Props) => {
    return (
        <div className='flex justify-between items-center w-full p-3.5 border-b border-gray-100 bg-white'>
            <div className='flex gap-3 justify-center'>
                <div className='relative rounded-full aspect-square w-12'>
                    <Image
                        src={user?.profilePic || '/images/png/user.png'}
                        alt={user?.username || 'user'}
                        fill
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-lg'>
                        {user?.fullName || "محمد روحانی"}
                    </p>
                    <div className='flex gap-1 items-center'>
                        <div className='size-2.5 bg-[#68D391] rounded-full' />
                        <p className='text-xs text-gray-500 font-light'>
                            آنلاین
                        </p>
                    </div>
                </div>
            </div>
            <div onClick={() => setNull()} className='cursor-pointer sm:hidden'>
                <Icon nameIcon='arrow-left' size={24} />
            </div>
        </div>
    )
}

export default HeaderUser