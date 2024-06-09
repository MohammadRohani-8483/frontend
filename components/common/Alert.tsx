import { Dispatch, ReactNode, SetStateAction } from 'react'
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import Icon from '@/components/common/Icon';
import { closePopup } from '@/functions/common';
import { isOpen } from '@/types/common';

type props = {
    title: string
    setIsOpen: Dispatch<SetStateAction<isOpen>>
    isOpen: isOpen
    confirmFunc?: (param?: any) => void
    redBtn?: boolean
    messageToast?: string
    children: ReactNode
    textBtn?: string
    error?: string | null
    zIndex: number
}

const Alert = ({ title, confirmFunc, redBtn, messageToast, children, textBtn, error = null, zIndex, setIsOpen, isOpen }: props) => {
    const variants = {
        visible: {
            y: 0,
            opacity: 1
        },
        hidden: {
            y: "50vh",
            opacity: 0
        },
    };

    const handleConfirm = () => {
        if (error) {
            toast.error(error)
        } else {
            confirmFunc && confirmFunc()
            closePopup(setIsOpen)
            messageToast && toast.success(messageToast)
        }
    }

    return (
        <motion.div
        style={{zIndex}}
            animate={isOpen.visible ? { opacity: 1 } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            className='absolute inset-0 backdrop-brightness-50 backdrop-blur-[3px] flex justify-center items-center'
            onClick={() => closePopup(setIsOpen)}
        >

            <motion.div
                className='flex flex-col justify-center items-center p-4 md:p-6 gap-4 md:gap-6 bg-white rounded-2xl w-[288px] md:w-auto'
                animate={isOpen.visible ? "visible" : "hidden"}
                initial={isOpen.visible ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
                style={{ zIndex, transform: 'translate(-50%,-50%)' }}
                onClick={(e)=>e.stopPropagation()}
            >
                <div className='flex justify-between items-center text-secondry-base text-xl font-bold w-full'>
                    <h1>
                        {title}
                    </h1>
                    <div className='cursor-pointer' onClick={() => closePopup(setIsOpen)}>
                        <Icon nameIcon='close' size={24} />
                    </div>
                </div>
                {children}
                {textBtn &&
                    <div className='flex w-full justify-end gap-3 md:gap-4'>
                        <button
                            onClick={() => closePopup(setIsOpen)}
                            className='rectangle-btn outline-btn !border-red-600 !bg-white !text-red-600 hover:!bg-red-50'
                        >
                            انصراف
                        </button>
                        <button
                            onClick={handleConfirm}
                            className={`rectangle-btn solid-btn ${redBtn ? "!bg-red-600 hover:!bg-red-700" : ""}`}
                        >
                            {textBtn}
                        </button>
                    </div>
                }
            </motion.div>
        </motion.div>
    )
}

export default Alert