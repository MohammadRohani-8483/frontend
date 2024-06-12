import { Dispatch, MouseEventHandler, SetStateAction, useContext } from 'react'
import { motion } from 'framer-motion'
import { isOpen } from '@/types/common'
import Image from 'next/image'
import Icon from '../common/Icon'
import { closePopup } from '@/functions/common'
import { Context } from '@/context/Context'

type Props = {
    setIsOpen: Dispatch<SetStateAction<isOpen>>
    isOpen: isOpen
    openEditPopup: () => void
    openLogoutPopup: () => void
}

type itemProps = {
    red?: boolean
    link?: string
    clickFunc?: () => void
    iconName: string
    title: string
    activeIcon?: string
}

const MenuItems = ({ isOpen, setIsOpen, openEditPopup, openLogoutPopup }: Props) => {
    const context = useContext(Context)
    return (
        <motion.div
            animate={isOpen.visible ? { x: 0 } : { x: 320 }}
            initial={{ x: 320 }}
            transition={{ type: "tween" }}
            className='w-60 sm:w-72 md:w-80 bg-white h-full absolute top-0 right-0 flex flex-col justify-start items-center z-10'
        >
            <div className='flex w-full items-center justify-between p-4 border-b border-gray-100'>
                <div className='flex gap-3 justify-start '>
                    <div className='relative rounded-full aspect-square w-12'>
                        <Image
                            src={context?.me?.profilePic!}
                            alt='user'
                            fill
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold text-lg'>
                            {context?.me?.fullName}
                        </p>
                        <div className='flex gap-1 items-center'>
                            <p className='text-xs text-gray-500 font-light'>
                                {context?.me?.username}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer' onClick={() => closePopup(setIsOpen)}>
                    <Icon nameIcon='close' size={24} />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2 p-4 justify-center items-start'>
                <Item iconName='edit' clickFunc={openEditPopup} title='ویرایش اطلاعات' />
                <Item iconName='logout' clickFunc={openLogoutPopup} title='خروج از حساب' red />
            </div>
        </motion.div>
    )
}

export default MenuItems

const Item = ({ title, clickFunc = () => { }, red, iconName }: itemProps) => {
    return (
        <div className='flex justify-center gap-4 items-center cursor-pointer'
            onClick={() => clickFunc()}>
            <div className='-mr-2 size-10 flex justify-center items-center' >
                <Icon nameIcon={iconName} size={24} />
            </div>
            <h3 className={`text-base ${red ? "text-error-base hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-secondry-base hover:drop-shadow-[0_0_24px_#313131a6]"}`}>
                {title}
            </h3>
        </div>
    )
}